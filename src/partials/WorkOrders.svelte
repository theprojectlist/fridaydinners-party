<script lang="ts">
  import { onMount } from "svelte";
  let workorderEndpoint = "https://fridaydinners.party/api";

  class WorkOrder {
    id: number;
    requester: string;
    description: string;
    status: boolean;

    constructor(
      id: number,
      requester: string,
      description: string,
      status: boolean
    ) {
      this.id = id;
      this.requester = requester;
      this.description = description;
      this.status = status;
    }
  }

  let worders: WorkOrder[] = [];

  // populate work orders on page load
  async function updateOrders() {
    worders = await fetch(`${workorderEndpoint}/workorders`)
      .then((res) => (!res.ok ? [] : res.json()))
      .catch(() => []);
  }

  // submit new work orders
  async function submitWorkOrder(e: Event) {
    let target = e.target as HTMLFormElement;
    let data = new FormData(target);

    target.reset();
    await fetch(`${workorderEndpoint}/workorder`, {
      method: "POST",
      body: data,
    });
    await updateOrders();
  }

  // update work order status whenever the checkbox is clicked
  async function updateStatus(e: MouseEvent) {
    let target = e.target as HTMLInputElement;
    let id = target.getAttribute("data-id");

    await fetch(`${workorderEndpoint}/workorder/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: target.checked,
      }),
    }).catch(() => alert("Failed to update status for work order #" + id));
  }

  onMount(updateOrders);
</script>

<section id="workorders" class="container">
  <h3>Work Orders</h3>

  <div class="row">
    <div class="column one-half">
      <form on:submit|preventDefault={submitWorkOrder}>
        <label for="requester">Your name *</label>
        <input
          id="requester"
          name="requester"
          class="u-full-width"
          type="text"
          placeholder="Elias Gabriel"
          required
        />
        <label for="description">Description of service *</label>
        <textarea
          id="description"
          class="u-full-width"
          name="description"
          required
        />
        <input class="button-primary" type="submit" value="Submit" />
      </form>
    </div>

    <div class="column one-half">
      <table class="u-full-width">
        <thead>
          <tr>
            <th>Description</th>
            <th>Requester</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {#each worders as order}
            <tr>
              <td>{order.description}</td>
              <td>{order.requester}</td>
              <td
                ><input
                  type="checkbox"
                  data-id={order.id}
                  on:click={updateStatus}
                  bind:checked={order.status}
                /></td
              >
            </tr>
          {/each}
        </tbody>
      </table>

      {#if !worders.length}
        <h5>There's nothing to do.</h5>
      {/if}
    </div>
  </div>
</section>

<style>
  h5 {
    margin-top: 1rem;
  }

  table {
    margin-bottom: 0;
  }
</style>

<script lang="ts">
  import { onMount } from "svelte";

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

  // populate work orders on page load
  let worders: WorkOrder[] = [];
  onMount(async () => {
    worders = await fetch("https://fridaydinners.party/api/workorders")
      .then((res) => (!res.ok ? [] : res.json()))
      .catch(() => [
        // {
        //   id: 43,
        //   requester: "Elias",
        //   description:
        //     "dqwdjqwd qwidoqiwdj ooqowdiqoidjodjoqdj dw oqiwjdoqidjoi oqiwjdoqidj oooo qoiwdjo oqijwdoqiwd",
        //   status: true,
        // },
      ]);
  });

  // submit new work orders
  async function submitWorkOrder() {}

  // update work order status whenever the checkbox is clicked
  async function updateStatus(e: MouseEvent) {
    let target = e.target as HTMLInputElement;

    await fetch("https://fridaydinners.party/api/workorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: target.checked }),
    }).catch(() =>
      alert(
        "Failed to update status for work order #" +
          target.getAttribute("data-id")
      )
    );
  }
</script>

<section id="workorders" class="container">
  <h3>Work Orders</h3>

  <div class="row">
    <div class="column one-half">
      <form on:submit|preventDefault={submitWorkOrder}>
        <label for="requesterInput">Your name</label>
        <input
          id="requesterInput"
          class="u-full-width"
          type="text"
          placeholder="Elias Gabriel"
        />
        <label for="descriptionInput">Description of service</label>
        <textarea class="u-full-width" placeholder="" id="descriptionInput" />
        <input class="button-primary" type="submit" value="Submit" />
      </form>
    </div>

    <div class="column one-half">
      <table>
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
          {:else}
            <h5 class="u-full-width">There's nothing to do.</h5>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>

<style>
  h5 {
    margin-top: 1rem;
  }
</style>

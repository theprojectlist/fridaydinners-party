<script lang="ts">
  import { onMount } from "svelte";
  let workorderEndpoint = import.meta.env.VITE_API_ENDPOINT;
  let orderPage = 0;

  class WorkOrder {
    id: number;
    requester: string;
    description: string;
    status: string;

    constructor(
      id: number,
      requester: string,
      description: string,
      status: string
    ) {
      this.id = id;
      this.requester = requester;
      this.description = description;
      this.status = status;
    }
  }

  let defaultWOs = [[], []];
  let worders: WorkOrder[][] = defaultWOs;

  // populate work orders on page load
  async function updateOrders() {
    worders = await fetch(`${workorderEndpoint}/workorders`)
      .then(async (res) => {
        if (res.ok) {
          let rjson = await res.json();
          return [rjson["incomplete"], rjson["complete"]];
        }

        return defaultWOs;
      })
      .catch(() => defaultWOs);
  }

  // submit new work orders
  async function submitWorkOrder(e: Event) {
    let target = e.target as HTMLFormElement;
    let data = new FormData(target);

    target.reset();
    await fetch(`${workorderEndpoint}/workorder`, {
      method: "POST",
      body: data,
    }).catch(() => alert("Failed to submit the new work order."));
    await updateOrders();
  }

  // update work order status whenever the checkbox is clicked
  async function updateStatus(e: Event) {
    let target = e.target as HTMLInputElement;
    let id = target.getAttribute("data-id");

    await fetch(`${workorderEndpoint}/workorder/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: target.value,
      }),
    })
      .then(async () => await updateOrders())
      .catch(() => alert("Failed to update status for work order #" + id));
  }

  onMount(updateOrders);
</script>

<section id="workorders" class="container">
  <h3>Work Orders</h3>

  <div class="row">
    <div class="column one-half">
      <form on:submit|preventDefault={submitWorkOrder}>
        <label for="requester">Requester *</label>
        <input
          id="requester"
          name="requester"
          class="u-full-width"
          type="text"
          placeholder="Elias Gabriel"
          maxlength="20"
          required
        />
        <label for="description">Description of service *</label>
        <textarea
          id="description"
          class="u-full-width"
          name="description"
          placeholder="Please do...."
          maxlength="300"
          required
        />
        <input class="button-primary" type="submit" value="Submit" />
      </form>
    </div>

    <div class="column one-half">
      <nav>
        <ul>
          <li on:click={() => (orderPage = 0)} class:selected={orderPage == 0}>
            Incomplete
          </li>
          <li on:click={() => (orderPage = 1)} class:selected={orderPage == 1}>
            Completed
          </li>
        </ul>
      </nav>

      <table class="u-full-width">
        <thead>
          <tr>
            <th>Description</th>
            <th>Requester</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {#each worders[orderPage].slice(0, 4) as order}
            <tr>
              <td>{order.description}</td>
              <td>{order.requester}</td>
              <td>
                <select
                  data-id={order.id}
                  bind:value={order.status}
                  on:change={updateStatus}
                >
                  <option value="pending">Pending</option>
                  <option value="inprogress">In Progress</option>
                  <option value="complete">Complete</option>
                </select>
              </td></tr
            >
          {/each}
        </tbody>
      </table>

      {#if !worders[orderPage].length}
        <h5>There's nothing here.</h5>
      {:else if worders[orderPage].length > 4}
        <p>
          <a target="_blank" href="{workorderEndpoint}/workorders"
            >See more work orders...</a
          >
        </p>
      {/if}
    </div>
  </div>
</section>

<style>
  h3 {
    margin: 6rem 0 4rem 0;
  }

  h5 {
    margin-top: 1rem;
  }

  table {
    margin-bottom: 0;
    margin-top: 0rem;
  }

  table select {
    margin-bottom: 0;
  }

  nav ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    margin-bottom: 1rem;
  }

  nav ul li {
    text-transform: uppercase;
    margin: 0;
    text-align: center;
    flex: 0 1 auto;
    text-decoration: none;
    color: #222;
    letter-spacing: 0.2rem;
    font-weight: 600;
    cursor: pointer;
    padding-bottom: 1rem;
  }

  nav ul .selected {
    position: relative;
    text-decoration: underline;
  }

  nav ul .selected::after {
    content: "▼";
    font-size: 1.5rem;
    position: absolute;
    top: calc(100% - 1em);
    left: calc(50% - 0.5em);
    transform: translate(-50% -50%);
    color: black;
  }

  p {
    text-align: center;
    padding-top: 1rem;
  }
</style>

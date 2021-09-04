<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<h3>Work Orders</h3>
<form>
  <fieldset>
    <label for="requester">Requester</label>
    <input type="text" placeholder="Elias" id="requester" />
    <label for="description">Description of Request</label>
    <textarea placeholder="Please do something..." id="description" />
    <input class="button-primary" type="submit" value="Submit Request" />
  </fieldset>
</form>

<table>
  <thead>
    <tr>
      <th>Requester</th>
      <th>Description</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Elias</td>
      <td>Please fix my glasses I would appreciate it a lot.</td>
      <td><input type="checkbox" checked /></td>
    </tr>
  </tbody>
</table>

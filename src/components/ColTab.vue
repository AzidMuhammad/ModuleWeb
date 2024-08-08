<template>
  <div class="table-container">
    <table class="custom-table">
      <thead>
        <tr>
          <th>Syntax</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>.columns-1</td>
        </tr>
        <tr>
          <td>.columns-2</td>
        </tr>
        <tr>
          <td>.columns-3</td>
        </tr>
        <tr>
          <td>.columns-4</td>
        </tr>
        <tr>
          <td>.columns-5</td>
        </tr>
        <tr>
          <td>.columns-6</td>
        </tr>
        <tr>
          <td>.columns-7</td>
        </tr>
        <tr>
          <td>.columns-8</td>
        </tr>
        <tr>
          <td>.columns-9</td>
        </tr>
        <tr>
          <td>.columns-10</td>
        </tr>
        <tr>
          <td>.columns-11</td>
        </tr>
        <tr>
          <td>.columns-12</td>
        </tr>
        <tr>
          <td>.columns-auto</td>
        </tr>
        <tr>
          <td>.columns-3vsmall</td>
        </tr>
        <tr>
          <td>.columns-2vsmall</td>
        </tr>
        <tr>
          <td>.columns-vsmall</td>
        </tr>
        <tr>
          <td>.columns-small</td>
        </tr>
        <tr>
          <td>.columns-base</td>
        </tr>
        <tr>
          <td>.columns-big</td>
        </tr>
        <tr>
          <td>.columns-vbig</td>
        </tr>
        <tr>
          <td>.columns-2vbig</td>
        </tr>
        <tr>
          <td>.columns-3vbig</td>
        </tr>
        <tr>
          <td>.columns-4vbig</td>
        </tr>
        <tr>
          <td>.columns-5vbig</td>
        </tr>
        <tr>
          <td>.columns-6vbig</td>
        </tr>
        <tr>
          <td>.columns-7vbig</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  margin: 20px;
  max-height: 300px;
  overflow-y: auto;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th,
.custom-table td {
  padding: 10px;
  text-align: center;
}

.custom-table tr {
  border-bottom: 1px solid rgb(85, 85, 85);
}

.custom-table tr:not(:last-child) td {
  border: none;
}

@media only screen and (max-width: 420px) {
  .table-container {
    margin: 20px;
    max-height: 200px;
    overflow-y: auto;
  }
}
</style>

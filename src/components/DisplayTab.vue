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
            <td>.block</td>
          </tr>
          <tr>
            <td>.inline-block</td>
          </tr>
          <tr>
            <td>.inline</td>
          </tr>
          <tr>
            <td>.flex</td>
          </tr>
          <tr>
            <td>.inline-flex</td>
          </tr>
          <tr>
            <td>.tab</td>
          </tr>
          <tr>
            <td>.inline-table</td>
          </tr>
          <tr>
            <td>.tab-caption</td>
          </tr>
          <tr>
            <td>.tab-cell</td>
          </tr>
          <tr>
            <td>.tab-columns</td>
          </tr>
          <tr>
            <td>.tab-columns-group</td>
          </tr>
          <tr>
            <td>.tab-foot-group</td>
          </tr>
          <tr>
            <td>.tab-head-group</td>
          </tr>
          <tr>
            <td>.tab-row-group</td>
          </tr>
          <tr>
            <td>.tab-row</td>
          </tr>
          <tr>
            <td>.flow-root</td>
          </tr>
          <tr>
            <td>.grid</td>
          </tr>
          <tr>
            <td>.inline-grid</td>
          </tr>
          <tr>
            <td>.contents</td>
          </tr>
          <tr>
            <td>.list-item</td>
          </tr>
          <tr>
            <td>.hidden</td>
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
  
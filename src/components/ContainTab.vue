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
            <td>.contain-full</td>
          </tr>
          <tr>
            <td>.contain-small</td>
          </tr>
          <tr>
            <td>.contain-medium</td>
          </tr>
          <tr>
            <td>.contain-big</td>
          </tr>
          <tr>
            <td>.contain-vbig</td>
          </tr>
          <tr>
            <td>.contain-2vbig</td>
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
  
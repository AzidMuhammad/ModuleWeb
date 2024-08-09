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
            <td>.overflow-auto</td>
          </tr>
          <tr>
            <td>.overflow-hidden</td>
          </tr>
          <tr>
            <td>.overflow-clip</td>
          </tr>
          <tr>
            <td>.overflow-visible</td>
          </tr>
          <tr>
            <td>.overflow-scroll</td>
          </tr>
          <tr>
            <td>.overflow-x-auto</td>
          </tr>
          <tr>
            <td>.overflow-y-auto</td>
          </tr>
          <tr>
            <td>.overflow-x-hidden</td>
          </tr>
          <tr>
            <td>.overflow-y-hidden</td>
          </tr>
          <tr>
            <td>.overflow-x-clip</td>
          </tr>
          <tr>
            <td>.overflow-y-clip</td>
          </tr>
          <tr>
            <td>.overflow-x-visible</td>
          </tr>
          <tr>
            <td>.overflow-y-visible</td>
          </tr>
          <tr>
            <td>.overflow-x-scroll</td>
          </tr>
          <tr>
            <td>.overflow-y-scroll</td>
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
  
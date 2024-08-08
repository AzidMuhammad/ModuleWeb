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
                <td>.space-x</td>
            </tr>
            <tr>
                <td>.space-y</td>
            </tr>
            <tr>
                <td>.space-x-0</td>
            </tr>
            <tr>
                <td>.space-y-0</td>
            </tr>
            <tr>
                <td>.space-x-1</td>
            </tr>
            <tr>
                <td>.space-y-1</td>
            </tr>
            <tr>
                <td>.space-x-2</td>
            </tr>
            <tr>
                <td>.space-y-2</td>
            </tr>
            <tr>
                <td>.space-x-3</td>
            </tr>
            <tr>
                <td>.space-y-3</td>
            </tr>
            <tr>
                <td>.space-x-4</td>
            </tr>
            <tr>
                <td>.space-y-4</td>
            </tr>
            <tr>
                <td>.space-x-5</td>
            </tr>
            <tr>
                <td>.space-y-5</td>
            </tr>
            <tr>
                <td>.space-x-6</td>
            </tr>
            <tr>
                <td>.space-y-6</td>
            </tr>
            <tr>
                <td>.space-x-7</td>
            </tr>
            <tr>
                <td>.space-y-7</td>
            </tr>
            <tr>
                <td>.space-x-8</td>
            </tr>
            <tr>
                <td>.space-y-8</td>
            </tr>
            <tr>
                <td>.space-x-10</td>
            </tr>
            <tr>
                <td>.space-y-10</td>
            </tr>
            <tr>
                <td>.space-x-12</td>
            </tr>
            <tr>
                <td>.space-y-12</td>
            </tr>
            <tr>
                <td>.space-x-14</td>
            </tr>
            <tr>
                <td>.space-y-14</td>
            </tr>
            <tr>
                <td>.space-x-16</td>
            </tr>
            <tr>
                <td>.space-y-16</td>
            </tr>
            <tr>
                <td>.space-x-18</td>
            </tr>
            <tr>
                <td>.space-y-18</td>
            </tr>
            <tr>
                <td>.space-x-20</td>
            </tr>
            <tr>
                <td>.space-y-20</td>
            </tr>
            <tr>
                <td>.space-x-22</td>
            </tr>
            <tr>
                <td>.space-y-22</td>
            </tr>
            <tr>
                <td>.space-x-24</td>
            </tr>
            <tr>
                <td>.space-y-24</td>
            </tr>
            <tr>
                <td>.space-x-26</td>
            </tr>
            <tr>
                <td>.space-y-26</td>
            </tr>
            <tr>
                <td>.space-x-28</td>
            </tr>
            <tr>
                <td>.space-y-28</td>
            </tr>
            <tr>
                <td>.space-x-30</td>
            </tr>
            <tr>
                <td>.space-y-30</td>
            </tr>
            <tr>
                <td>.space-x-32</td>
            </tr>
            <tr>
                <td>.space-y-32</td>
            </tr>
            <tr>
                <td>.space-x-34</td>
            </tr>
            <tr>
                <td>.space-y-34</td>
            </tr>
            <tr>
                <td>.space-x-36</td>
            </tr>
            <tr>
                <td>.space-y-36</td>
            </tr>
            <tr>
                <td>.space-x-38</td>
            </tr>
            <tr>
                <td>.space-y-38</td>
            </tr>
            <tr>
                <td>.space-x-40</td>
            </tr>
            <tr>
                <td>.space-y-40</td>
            </tr>
            <tr>
                <td>.space-x-42</td>
            </tr>
            <tr>
                <td>.space-y-42</td>
            </tr>
            <tr>
                <td>.space-x-44</td>
            </tr>
            <tr>
                <td>.space-y-44</td>
            </tr>
            <tr>
                <td>.space-x-46</td>
            </tr>
            <tr>
                <td>.space-y-46</td>
            </tr>
            <tr>
                <td>.space-x-48</td>
            </tr>
            <tr>
                <td>.space-y-48</td>
            </tr>
            <tr>
                <td>.space-x-50</td>
            </tr>
            <tr>
                <td>.space-y-50</td>
            </tr>
            <tr>
                <td>.space-x-52</td>
            </tr>
            <tr>
                <td>.space-y-52</td>
            </tr>
            <tr>
                <td>.space-x-54</td>
            </tr>
            <tr>
                <td>.space-y-54</td>
            </tr>
            <tr>
                <td>.space-x-56</td>
            </tr>
            <tr>
                <td>.space-y-56</td>
            </tr>
            <tr>
                <td>.space-x-58</td>
            </tr>
            <tr>
                <td>.space-y-58</td>
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
  
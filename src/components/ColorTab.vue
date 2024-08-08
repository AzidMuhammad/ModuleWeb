<template>
    <div class="palette-container">
      <div v-for="colorGroup in palette" :key="colorGroup.name" class="color-group">
        <div class="color-row">
          <div v-for="color in colorGroup.colors" :key="color" class="color-swatch" :style="{ backgroundColor: color }">
          </div>
        </div>
        <p>{{ colorGroup.name }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { colorPalette } from './js/Color.js';
  
  export default {
    data() {
      return {
        palette: colorPalette
      };
    },
  };
  </script>
  
  <style scoped>
  .palette-container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    padding: 50px;
  }
  
  .color-group {
    display: flex;
    flex-direction: column;
    padding: 5px;
  }
  
  .color-swatch {
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .color-group p {
    color: #e0e0e0;
    font-size: 12px;
    margin: 5px 0;
  }

  @media only screen and (max-width: 420px) {
    .palette-container {
      margin: 20px;
      max-height: 200px;
      overflow-y: auto;
      margin-left: -30px;
    }

    .color-swatch {
        width: 70px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      .color-group p {
        color: #e0e0e0;
        font-size: 10px;
        margin: 5px 0;
      }
  }
  </style>
  
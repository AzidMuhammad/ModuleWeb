<template>
    <button @click="goToPaypal">
      Support Us
    </button>
  </template>
  
  <script>
  export default {
    methods: {
      goToPaypal() {
        window.location.href = 'https://www.paypal.me/ModuluxLabs';
      }
    }
  }
  </script>
  
  <style scoped>

  </style>
  
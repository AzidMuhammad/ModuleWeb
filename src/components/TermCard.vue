<template>
    <div class="terminal-card">
      <pre ref="terminalText" class="terminal-content">{{ text }}</pre>
      <button @click="copyText" class="copy-button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM19 19H5V5H7V7H17V5H19V19ZM9 9H15V11H9V9ZM9 13H15V15H9V13ZM9 17H15V19H9V17Z" fill="#FFFFFF"/>
        </svg>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TermCard',
    props: {
      text: {
        type: String,
        required: true,
      },
    },
    methods: {
      copyText() {
        const textElement = this.$refs.terminalText;
        const range = document.createRange();
        range.selectNodeContents(textElement);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
      },
    },
  };
  </script>
  
  <style scoped>
  .terminal-card {
    background-color: #1e1e1e;
    color: whitesmoke;
    padding: 20px;
    border-radius: 8px;
    font-family: 'Courier New', Courier, monospace;
    position: relative;
  }
  
  .terminal-content {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  
  .copy-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
  }
  
  .copy-button svg {
    fill: #fff;
  }
  
  .copy-button:hover svg {
    fill: #aaa;
  }
  </style>
  
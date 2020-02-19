<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
    user-select: none;
  }

  body {
    font-family: Segoe UI, Quicksand, Source Sans Pro, BlinkMacSystemFont, Roboto,
    Helvetica Neue, Arial, sans-serif;
    font-style: normal;
    background: $white;
    font-size: 16px;
  }
  .container {
    min-width: 300px;
    max-width: 1440px;
    margin: 0 auto;
  }
</style>

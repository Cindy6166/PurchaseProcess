<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}
h1 {
  @media (max-width: 576px) {
    font-size: 20px;
  }
}
h3 {
  @media (max-width: 576px) {
    font-size: 16px;
  }
}
h3 {
  @media (max-width: 576px) {
    font-size: 14px;
  }
}
i {
  @media (max-width: 576px) {
    font-size: 12px;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

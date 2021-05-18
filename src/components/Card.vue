<template>
  <div class="step">
    <div class="text">
      <h1>{{ $t(title) }}</h1>
      <h3>{{ $t(text) }}</h3>
      <br />
    </div>
    <div class="content">
      <slot name="content"></slot>
      <div class="button">
        <slot name="button"></slot>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    text: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.step {
  .text {
    padding: 2% 5% 0 5%;
  }
  .content {
    padding: 0 10%;
  }
  .button {
    margin-top: 3%;
  }
}
</style>

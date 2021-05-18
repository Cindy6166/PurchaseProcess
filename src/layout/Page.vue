<template>
  <div class="page">
    <div class="navbar">
      <div class="item">
        <el-select v-model="$store.state.lang" @change="setLang" size="mini">
          <el-option
            v-for="(item, index) in optionsLang"
            :key="index"
            :label="item.text"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="item">
        <i class="el-icon-user"> {{ $t("sign in") }}</i>
      </div>
      <div class="item">
        <i class="el-icon-document"> {{ $t("help") }} </i>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="step">
          <slot name="step"></slot>
        </div>
        <div class="main">
          <slot name="main"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Page",
  components: {},
  data() {
    return {
      optionsLang: [
        { text: "Español", value: "sp" },
        { text: "English", value: "en" },
      ],
      isClick: "",
    };
  },
  computed: {},
  methods: {
    // store the language
    setLang(value) {
      console.log(value);
      this.$store.commit("setLang", value);
      this.$i18n.locale = value;
      localStorage.setItem("footmark-lang", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 70px;
  padding: 0 5% 0 0;
  display: flex;
  flex-direction: row-reverse;
  .item {
    line-height: 70px;
    margin: 0 5% 0 0;
    .el-icon-user {
      color: black;
    }
  }
}
.container {
  width: 100vw;
  height: 100vh;
  background-color: rgb(224, 221, 221);
  .content {
    margin: auto;
    width: 80vw;
    .main {
      text-align: center;
      background-color: white;
      filter: drop-shadow(10px 10px 4px rgba(197, 195, 195, 0.7));
      padding-bottom: 2%;
    }
  }
}
</style>

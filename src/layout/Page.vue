<template>
  <div class="page">
    <div class="top-bar">
      <Lang />
      <div class="userCenter">
        <el-popover
          placement="bottom"
          :title="$t('user')"
          width="300"
          trigger="click"
        >
          <br />
          <h3>{{ $t("name") }}:</h3>
          <br />
          <router-link to="/">{{ $t("login out") }}</router-link>
          <el-button slot="reference" circle
            ><i class="el-icon-user-solid"></i
          ></el-button>
        </el-popover>
      </div>
      <slot name="top-bar"></slot>
    </div>
    <div class="container">
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import Lang from "@/components/Lang";

export default {
  name: "Page",
  components: {
    Lang,
  },
  data() {
    return {
      optionsLang: [
        { text: "中文", value: "zh" },
        { text: "English", value: "en" },
      ],
      isClick: "",
    };
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.top-bar {
  width: 100%;
  height: 20vh;
  padding: 15px;
  display: flex;
  flex-direction: row-reverse;
  // background-color: burlywood;
}
.container {
  display: flex;
}
.content {
  width: 100vw;
  height: 100vh;
  padding: 5% 0;
  // background-color: cornflowerblue;
}
.lang {
  text-align: right;
}
.userCenter {
  text-align: right;
  padding: 0 20px 0 0;
  .el-icon-user-solid {
    color: cornflowerblue;
    font-size: 20px;
  }
}
</style>

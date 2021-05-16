<template>
  <page>
    <template slot="content">
      <div class="login">
        <el-form
          status-icon
          label-width="200px"
          class="demo-ruleForm"
        >
          <el-form-item :label="$t('account name')" prop="account">
            <el-input></el-input>
          </el-form-item>
          <el-form-item :label="$t('password')" prop="pass">
            <el-input type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">{{ $t("submit") }}</el-button>
          </el-form-item>
        </el-form>
        <router-view />
      </div>
    </template>
  </page>
</template>

<script>
import Page from "@/layout/Page.vue";
export default {
  name: "CheckOut",
  components: {
    Page,
  },
  data() {
    return
  },
};
</script>
<style lang="scss" scoped>
.lang {
  display: flex;
  flex-direction: row-reverse;
  padding: 10px;
}
.login {
  width: 50%;
  margin-left: 20%;
  padding-top: 10%;
}
</style>

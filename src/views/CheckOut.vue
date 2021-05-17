<template>
  <page>
    <template slot="step">
      <el-steps class="step" :active="active" finish-status="success">
        <el-step title="My DATA"></el-step>
        <el-step title="PAY"></el-step>
      </el-steps>
    </template>
    <template slot="main">
      <div v-show="stepOneShow" class="step-one">
        <div>
          <h1>My Data</h1>
          <h3>
            Review the data and complete those pending before continuing with
            the process
          </h3>
          <br />
        </div>
        <el-form status-icon label-width="0" class="demo-ruleForm">
          <el-form-item :label="$t('name')" prop="account">
            <el-input></el-input>
          </el-form-item>
          <el-form-item :label="$t('Surnames')" prop="pass">
            <el-input type="password" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <el-button style="margin-top: 12px" @click="next">Continue</el-button>
        <router-view />
      </div>
      <div v-show="stepTwoShow" class="step-two">
        two
        <el-button type="primary">{{ $t("Previous") }}</el-button>
        <el-button style="margin-top: 12px" @click="next">Continue</el-button>
      </div>
      <div v-show="stepThreeShow" class="step-three">three</div>
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
    return {
      active: 0,
      stepOneShow: true,
      stepTwoShow: false,
      stepThreeShow: false,
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
      this.goNextStep();
    },
    goNextStep() {
      if (this.active === 1) {
        this.stepOneShow = false;
        this.stepTwoShow = true;
      } else if (this.active === 2) {
        this.stepTwoShow = false;
        this.stepThreeShow = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.el-form-item {
  display: flex;
  flex-direction: column;
}
.step {
  // margin: auto;
  padding: 10% 0;
}
</style>

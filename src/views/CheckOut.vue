<template>
  <page>
    <template slot="step">
      <el-steps class="step" :active="active" finish-status="success" align-center>
        <el-step title="My Data"></el-step>
        <el-step title="Pay"></el-step>
      </el-steps>
    </template>
    <template slot="main">
      <div v-show="stepOneShow" class="step-one">
        <div class="text">
          <h1>My Data</h1>
          <h3>
            Review the data and complete those pending before continuing with
            the process
          </h3>
          <br />
        </div>
        <div class="content">
          <el-form status-icon label-width="0" class="demo-ruleForm">
            <el-form-item :label="$t('name')" prop="account">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="$t('Surnames')" prop="pass">
              <el-input type="password" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div class="button">
            <el-button @click="next">Continue</el-button>
          </div>
        </div>
        <router-view />
      </div>
      <div v-show="stepTwoShow" class="step-two">
        <div class="text">
          <h1>Product payment</h1>
          <h3>
            Once the payment of the product has been made, an email has been
            received with the details of the purchase
          </h3>
          <br />
        </div>
        <div class="content">
          <div class="creditCard">
            <img class="creditCardImg" src="@/assets/creditCard.jpeg" alt="" />
            <h2>Credit card</h2>
            <h3>
              It was redirected to a payment platform, It is a secure process.
              Payment validation may take 24 hours to complete.
            </h3>
            <img class="creditCardImg" src="@/assets/visaMaster.png" alt="" />
          </div>
        </div>
        <div class="button">
          <el-button @click="previous" type="primary">{{
            $t("Previous")
          }}</el-button>
          <el-button @click="next">Continue</el-button>
        </div>
      </div>
      <div v-show="stepThreeShow" class="step-three">
        <div class="content">
          <img class="successImg" src="@/assets/success.gif" alt="" />
          <!-- <img class="successImg" :src="url+successData.img" alt="" /> -->
          <h2>{{ successData.title }}</h2>
          <h3>{{ successData.text }}</h3>
        </div>
      </div>
    </template>
  </page>
</template>

<script>
import axios from "axios";
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
      successData: [],
      // url:'http://www.mocky.io/v2/5e3d41272d00003f7ed95c09/'
    };
  },
  mounted() {
    this.getSuccessData();
  },
  methods: {
    async getSuccessData() {
      await axios
        .get("http://www.mocky.io/v2/5e3d41272d00003f7ed95c09")
        .then((response) => {
          this.successData = response.data;
          console.log(this.successData);
        })
        .catch((error) => {
          console.log(error);
        });
    },

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
    previous() {
      this.active = 0;
      this.stepTwoShow = false;
      this.stepOneShow = true;
    }
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
  padding: 50px 0;
}
.step-one,
.step-two,
.step-three {
  .text {
    padding: 50px 50px 0px 50px;
  }
  .content {
    padding: 0 20%;
    .creditCard {
      border: 1px solid rgb(128, 126, 126);
      padding: 0 10%;
      .creditCardImg {
        width: 10vw;
      }
    }
    .successImg {
      margin-top: 50px;
      width: 30vw;
    }
  }
  .button {
    margin-top: 30px;
  }
}
</style>

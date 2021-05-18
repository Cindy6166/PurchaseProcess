<template>
  <page>
    <template slot="step">
      <el-steps
        class="step"
        :active="active"
        finish-status="success"
        align-center
      >
        <el-step :title="$t('my data')"></el-step>
        <el-step :title="$t('pay')"></el-step>
      </el-steps>
    </template>
    <template slot="main">
      <card v-show="stepOne.show" :title="stepOne.title" :text="stepOne.text">
        <template slot="content">
          <el-form status-icon label-width="0" class="demo-ruleForm">
            <el-form-item :label="$t('name')" prop="account">
              <el-input v-model="account.name"></el-input>
            </el-form-item>
            <el-form-item :label="$t('surnames')" prop="pass">
              <el-input v-model="account.surname"></el-input>
            </el-form-item>
          </el-form>
        </template>
        <template slot="button">
          <el-button @click="next" type="primary">{{
            $t("continue")
          }}</el-button>
        </template>
      </card>
      <card v-show="stepTwo.show" :title="stepTwo.title" :text="stepTwo.text">
        <template slot="content">
          <div class="creditCard">
            <img class="creditCardImg" src="@/assets/creditCard.jpeg" alt="" />
            <h2>{{ $t("credit card") }}</h2>
            <h3>
              {{
                $t(
                  "it was redirected to a payment platform, it is a secure process. payment validation may take 24 hours to complete."
                )
              }}
            </h3>
            <img class="creditCardImg" src="@/assets/visaMaster.png" alt="" />
          </div>
        </template>
        <template slot="button">
          <el-button @click="previous" type="primary">{{
            $t("previous")
          }}</el-button>
          <el-button @click="next">{{ $t("continue") }}</el-button>
        </template>
      </card>
      <card v-show="stepThree.show">
        <template slot="content">
          <img class="successImg" src="@/assets/success.gif" alt="" />
          <h2>{{ $t(stepThree.data.title) }}</h2>
          <h3>{{ $t(stepThree.data.text) }}</h3>
        </template>
      </card>
    </template>
  </page>
</template>

<script>
import axios from "axios";
import Page from "@/layout/Page.vue";
import Card from "@/components/Card.vue";
export default {
  name: "CheckOut",
  components: {
    Page,
    Card,
  },
  data() {
    return {
      active: 0,
      account: {
        name: "",
        surname: "",
      },
      stepOne: {
        show: true,
        title: "my data",
        text: "review the data and complete those pending before continuing with the process",
      },
      stepTwo: {
        show: false,
        title: "product payment",
        text: "once the payment of the product has been made, an email has been received with the details of the purchase",
      },
      stepThree: {
        show: false,
        data: "",
      },
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
          this.stepThree.data = response.data;
          console.log(this.data);
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
      if (this.account.name && this.account.surname) {
        if (this.active === 1) {
          this.stepOne.show = false;
          this.stepTwo.show = true;
        } else if (this.active === 2) {
          this.stepTwo.show = false;
          this.stepThree.show = true;
        }
      } else {
        this.active = 0;
        this.$message({
          message: "Please fill up the form.",
          type: "error",
        });
      }
    },
    previous() {
      this.active = 0;
      this.stepTwo.show = false;
      this.stepOne.show = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.el-form {
  padding: 0 20%;
  @media (max-width: 576px) {
    padding: 0 3%;
  }
  .el-form-item {
    display: flex;
    flex-direction: column;
  }
}
.step {
  padding: 50px 0;
}
.creditCard {
  border: 1px solid rgb(128, 126, 126);
  padding: 0 10%;
  .creditCardImg {
    width: 10vw;
  }
}
.successImg {
  width: 30vw;
}
.button {
  margin-top: 30px;
}
</style>

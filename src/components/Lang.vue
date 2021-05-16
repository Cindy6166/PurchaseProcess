<template>
  <div class="lang">
    <!-- <label v-for="(item, index) in optionsLang" v-bind:key="index">
          <input
            type="radio"
            v-model="$store.state.lang"
            :value="item.value"
            v-on:change="setLang(item.value)"
          />
          {{ item.text }}
        </label> -->
    <el-select
      v-model="$store.state.lang"
      placeholder="请选择"
      @change="setLang"
    >
      <el-option
        v-for="(item, index) in optionsLang"
        :key="index"
        :label="item.text"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: "Lang",
  data() {
    return {
      optionsLang: [
        { text: "中文", value: "zh" },
        { text: "English", value: "en" },
      ],
      isClick: "",
    };
  },
  methods: {
    // 儲存切換的語系
    setLang(value) {
      console.log(value);
      this.$store.commit("setLang", value);
      this.$i18n.locale = value;
      localStorage.setItem("footmark-lang", value);
    },
  },
};
</script>

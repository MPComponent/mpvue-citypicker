<template>
<div class="mpvue-city-picker">
  <button type="default" @click="showCityPicker">城市选择</button>
  <mpvue-city-picker ref="mpvueCityPicker"></mpvue-city-picker>
</div>
</template>

<script>
import mpvueCityPicker from '../../../src/mpvueCityPicker.vue';
export default {
  data() {},
  components: {
    mpvueCityPicker
  },
  methods: {
    showCityPicker() {
      this.$refs.mpvueCityPicker.show();
    }
  }
};
</script>
<style>
</style>

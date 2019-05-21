<template>
  <div class="mpvue-city-picker">
    <button type="default" @click="showCityPicker">城市选择</button>
    <mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onChange="onChange" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
  </div>
</template>

<script>
import mpvueCityPicker from '../../../src/mpvueCityPicker.vue';
// import mpvueCityPicker from 'mpvue-citypicker';
export default {
  data() {
    return {
      pickerValueDefault: [0, 0, 1]
    };
  },
  components: {
    mpvueCityPicker
  },
  methods: {
    showCityPicker() {
      this.$refs.mpvueCityPicker.show();
    },
    onChange(e) {
      console.log(e);
    },
    onCancel(e) {
      console.log(e);
    },
    onConfirm(e) {
      console.log(e);
    }
  }
};
</script>
<style>
</style>

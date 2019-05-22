# mpvue-citypicker

> 基于 mpvue 框架的城市选择器，含 code

数据来源于 [Administrative-divisions-of-China](https://github.com/modood/Administrative-divisions-of-China),用 nodejs 对其数据进行了重组。

![npm version](https://img.shields.io/npm/v/mpvue-citypicker.svg?style=flat)
![download](https://img.shields.io/npm/dm/mpvue-citypicker.svg?style=flat)
![license](https://img.shields.io/github/license/MPComponent/mpvue-citypicker.svg)

## 使用

* 安装
``` bash
npm install mpvue-citypicker --save
```

* 在页面中使用
``` vue
<template>
    <mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onChange="onChange" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
</template>

<script>
import mpvueCityPicker from 'mpvue-citypicker';
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
```

* 初始化

在父组件中调用 ` mpvueCityPicker` 实例中的 `show` 方法即可

``` javascript
this.$refs.mpvueCityPicker.show();
```

## 效果
<div align="center">
  <img src="https://github.com/KuangPF/mpvue-citypicker/blob/master/data/img/mpvue-citypicker01.png" width="320px">
  <img src="https://github.com/KuangPF/mpvue-citypicker/blob/master/data/img/mpvue-citypicker02.png" width="320px">
</div>

## 参数说明

### pickerValueDefault
* 说明：citypicker 默认选中值
* 类型：Array
* 可选值：-
* 是否必填： 否
* 默认值：[0, 0, 0]

### themeColor
* 说明：主题色
* 类型：String
* 可选值：-
* 是否必填： 否
* 默认值：#1aad19

### onChange
* 说明：citypicker 组件滚动时回调，返回选中的返回 label , value 以及 code 的值
* 类型：EventHandle
* 可选值：-
* 是否必填： 否
* 默认值：-

### onConfirm
* 说明：citypicker 组件点击确定时回调，返回选中的返回 label , value 以及 code 的值
* 类型：EventHandle
* 可选值：-
* 是否必填： 否
* 默认值：-

### onCancel
* 说明：citypicker 组件点击取消时回调，返回选中的返回 label , value 以及 code 的值
* 类型：EventHandle
* 可选值：-
* 是否必填： 否
* 默认值：-


## 版本日志

[version logs](https://github.com/MPComponent/mpvue-citypicker/releases)

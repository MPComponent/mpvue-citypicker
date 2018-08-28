var fs = require('fs');
var provinceData = require('./city_data_origin/province.js');
var cityData = require('./city_data_origin/city.js');
var areaData = require('./city_data_origin/area.js');
// 将 provinces city area 数据依次遍历
var proviceList = [];
var cityList = [];
var areaList = [];
for (var i = 0; i < provinceData.length; i++) {
  var proviceListItem = {
    label: provinceData[i].name,
    value: provinceData[i].code
  }
  proviceList.push(proviceListItem);
  cityList[i] = [];
  // 根据 code 获取 city
  var n = -1;
  areaList[i] = [];
  for (var j = 0; j < cityData.length; j++) {
    if (cityData[j].provinceCode == proviceListItem.value) {
      n++;
      var cityListItem = {
        label: cityData[j].name,
        value: cityData[j].code
      }
      cityList[i].push(cityListItem);
      areaList[i][n] = [];
      for (var k = 0; k < areaData.length; k++) {
        if (areaData[k].cityCode == cityListItem.value) {
          var areaListItem = {
            label: areaData[k].name,
            value: areaData[k].code
          }
          areaList[i][n].push(areaListItem);
        }
      }
    }
  }
}
fs.writeFileSync(__dirname + '/city_data_output/province.js', JSON.stringify(proviceList, undefined, 2), 'utf-8');
fs.writeFileSync(__dirname + '/city_data_output/city.js', JSON.stringify(cityList, undefined, 2), 'utf-8');
fs.writeFileSync(__dirname + '/city_data_output/area.js', JSON.stringify(areaList, undefined, 2), 'utf-8');

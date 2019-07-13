//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{name: 1}, {name:2}, {name:3}],
    funcList: [
      {text:"排行榜"},
      {text:"回收价格"},
      {text:"回收时间"},
      {text:"回收攻略"},
      {text:"使用攻略"},
      {text:"加盟须知"}
    ]
  },
  onLoad: function () {
  },

})

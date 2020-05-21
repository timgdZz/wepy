//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    show: false,
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    icon: [
      {path:'../../static/image/disinfect.png',title:"消毒杀菌",url:"../disinfect/disinfect"},
      {path:'../../static/image/phone.png',title:"手机维修",url:"../phone/phone"},
      {path:'../../static/image/nenny.png',title:"保姆",url:"../nenny/nenny"},
      {path:'../../static/image/cleaning.png',title:"保洁清洗",url:"../cleaning/cleaning"},
      {path:'../../static/image/Conduit.png',title:"管道疏通",url:"../Conduit/Conduit"},
      {path:'../../static/image/moving.png',title:"搬家服务",url:"../moving/moving"},
      {path:'../../static/image/plumber.png',title:"水电工",url:"../plumber/plumber"},
      {path:'../../static/image/hourlyWork.png',title:"钟点工",url:"../hourlyWork/hourlyWork"},
      {path:'../../static/image/laundry.png',title:"洗衣修鞋",url:"../laundry/laundry"},
      {path:'../../static/image/more.png',title:"更多",url:"../more/more"}
    ],
    tabarTitle: [
      {title:'服务',isAcitve: true},
      {title:'活动',isAcitve: false},
      {title:'口碑',isAcitve: false},
      {title:'品牌',isAcitve: false},
    ],
    currentTab: 0
  },
  //事件处理函数
  onLoad: function() {

  },
  tabbarActive(e) {
    var that = this
 
    var index = e.currentTarget.dataset.active
    if(index == that.data.currentTab) {
      console.log(index)
      return false
    } else {
      that.setData({
        currentTab: index
      })
      var tabarTitle = that.data.tabarTitle
      tabarTitle.forEach(function(item,index) {
        if( that.data.currentTab == index) {
          that.setData({
            ['tabarTitle['+ index + '].isAcitve']: true
          })
        } else {
          that.setData({
            ['tabarTitle['+ index + '].isAcitve']: false
          })
        }
      });
      
      
    }

  }

})
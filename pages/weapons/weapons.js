// pages/weapons/weapons.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bg: './img/bg.png',
    icons: [
      { scr:'./img/img_weapon_01.png'},
      // { scr: './img/img_weapon_02.png' },
      // { scr: './img/img_weapon_03.png' },
      // { scr: './img/img_weapon_04.png' },
      // { scr: './img/img_weapon_05.png' },
      // { scr: './img/img_weapon_06.png' },
      // { scr: './img/img_weapon_07.png' },
      // { scr: './img/img_weapon_08.png' },
      // { scr: './img/img_weapon_09.png' },
      // { scr: './img/img_weapon_10.png' },
      // { scr: './img/img_weapon_11.png' },
      // { scr: './img/img_weapon_12.png' },
      // { scr: './img/img_weapon_13.png' },
      // { scr: './img/img_weapon_14.png' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  //点击图标跳转至物品列表
  itemPicked: function () {
    console.log('111111');
    wx.request({
      url: 'http://localhost:3000/register', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        username: 'username',
        password: 'password'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})
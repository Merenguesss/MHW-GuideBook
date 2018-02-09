// pages/weapons/weapons.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bg: './img/bg.png',
    weaponsShow: false,
    icons: [
      { scr: './img/img_weapon_01.png', value: 'GS'},
      { scr: './img/img_weapon_02.png', value: 'SS'},
      { scr: './img/img_weapon_03.png', value: 'DB'},
      { scr: './img/img_weapon_04.png', value: 'LS'},
      { scr: './img/img_weapon_05.png', value: 'HM'},
      { scr: './img/img_weapon_06.png', value: 'HH'},
      { scr: './img/img_weapon_07.png', value: 'LC'},
      { scr: './img/img_weapon_08.png', value: 'GL'},
      { scr: './img/img_weapon_09.png', value: 'SA'},
      { scr: './img/img_weapon_10.png', value: 'CB'},
      { scr: './img/img_weapon_11.png', value: 'IG'},
      { scr: './img/img_weapon_12.png', value: 'BW'},
      { scr: './img/img_weapon_13.png', value: 'LB'},
      { scr: './img/img_weapon_14.png', value: 'HB'}
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
  showWeapon: function() {
    var that = this;
    var wdata = !that.data.weaponsShow;
    this.setData({
      weaponsShow: wdata
    });
  },
  //点击图标跳转至物品列表
  itemPicked: function (e) {
    var gid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../weaponList/weaponList?wg=' + gid
    })
  }
})
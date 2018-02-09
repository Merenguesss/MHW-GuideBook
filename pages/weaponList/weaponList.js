// pages/weaponList/weaponList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wg: '',
    weaponlist: [],
    oreShow: false,
    boneShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      wg : options.wg
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    var wg = that.data.wg;
    wx.request({
      url: 'https://www.merenguesss.cn/getWeaponList', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        group: wg.toLowerCase()
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var weaponlist = res.data;
        for (var i = 0; i < weaponlist.length; i++){
          weaponlist[i].subArr = [];
          for (var j = weaponlist[i].subset; j >= 1; j--){
            weaponlist[i].subArr.push(j);
          }
        }
        that.setData({
          weaponlist: weaponlist
        });
      }
    })
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
  showBone: function() {
    var that = this;
    var bone = !that.data.boneShow;
    this.setData({
      boneShow: bone,
    });
  },
  showOre: function () {
    var that = this;
    var ore = !that.data.oreShow;
    this.setData({
      oreShow: ore
    });
  },
  showSubset: function(e) {
    var that = this;
    var weaponlist = that.data.weaponlist;
    weaponlist.map(function(item,index){
      if (item.id === e.currentTarget.dataset.id) {
        if (item.show === true){
          item.show = false;
        }
        else {
          item.show = true;
        }
      }
    });
    that.setData({
      weaponlist: weaponlist
    });
  },
  showDetail: function(e) {
    var wid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../weaponInfo/weaponInfo?wid=' + wid
    })
  }
})
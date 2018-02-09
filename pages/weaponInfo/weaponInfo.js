// pages/weaponinfo/weaponinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wid: '',
    weapon: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      wid: options.wid
    });
    console.log(that.data.wid);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    var wid = that.data.wid;
    wx.request({
      url: 'https://www.merenguesss.cn/getWeapon', 
      method: 'POST',
      data: {
        wid: wid.toLowerCase()
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var weapon = res.data;
        that.setData({
          weapon: weapon[0]
        });
        console.log(that.data.weapon);
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
  
  }
})
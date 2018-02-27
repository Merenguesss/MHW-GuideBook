// pages/weaponinfo/weaponinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wid: '',
    weapon: [],
    weaponImg: '',
    sharpness: [],
    source: '',
    material: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      wid: options.wid,
      weaponImg: './img/' + options.wid.substr(0, 6) + '.png'
    });
    console.log(that.data.wid.substr(0,6));
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
        var sharpness = weapon[0].sharpness.split(",");
        var sharpness = sharpness.map(function(item, index){
          return Number(item) * 100 + '%';
        });
        var material = weapon[0].material.split(",");
        that.setData({
          weapon: weapon[0],
          sharpness: sharpness,
          source: weapon[0].source ? weapon[0].source : '无',
          material: material
        });
        console.log(that.data.material);
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
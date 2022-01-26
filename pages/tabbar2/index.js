// pages/tabbar2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  async onPageNavigating(e){
    console.log(e)
    // 演示可以在跳转前做一些事情
    // let res = await wx.wxp.request({
    //   url: 'http://localhost:3000/hi?name=index2',
    // })
    e.detail.eventCallback({
      openType:"initData",
      openData:{
        a:"data..."
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    if (eventChannel.on){
      eventChannel.on('initData', (data)=> {
        console.log("data",data)
        this.setData({
          initData:data
        })
      })
    }
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

  }
})
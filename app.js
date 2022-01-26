// app.js
import Event from './lib/event'
import wxp from './lib/wxp'

App({
  // 绑定全局wx上
  wxp: (wx.wxp = wxp),
  globalData: (wx.globalData = {}),
  globalEvent: (wx.globalEvent = new Event()),
  onLaunch() {
  },
  globalData: {
  }
})

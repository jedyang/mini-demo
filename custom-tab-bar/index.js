Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/tabbar1/index",
      iconPath: "/components/custom-tab-bar/component.png",
      selectedIconPath: "/components/custom-tab-bar/component-on.png",
      text: "index",
      iconClass: "icon-homefill",
      iconTopClass: ""
    }, {
      pagePath: "/pages/tabbar1/index2",
      iconPath: "/components/custom-tab-bar/component.png",
      selectedIconPath: "/components/custom-tab-bar/component-on.png",
      text: "index",
      iconClass: "cu-btn icon-add bg-green shadow",
      iconTopClass: "add-action"
    }, {
      pagePath: "/pages/tabbar1/index3",
      iconPath: "/components/custom-tab-bar/component.png",
      selectedIconPath: "/components/custom-tab-bar/component-on.png",
      text: "自定义",
      iconClass: "icon-my",
      iconTopClass: ""
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})
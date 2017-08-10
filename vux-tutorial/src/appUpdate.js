var appUpdate = {
  // Application Constructor
  initialize: function () {
    this.bindEvents()
  },
  // Bind any events that are required.
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false)
    document.addEventListener('chcp_updateLoadFailed', this.onUpdateLoadError, false)
  },
  // deviceready Event Handler
  onDeviceReady: function () {
    window.alert('Cordova : device is ready !')
  },
  onUpdateLoadError: function (eventData) {
    var error = eventData.detail.error
    window.alert('Cordova : onUpdateLoadError !' + error.code)

    // 当检测出内核版本过小
    if (error && error.code === error.APPLICATION_BUILD_VERSION_TOO_LOW) {
      var dialogMessage = '有新的版本,请下载更新'
      window.alert('Cordova : ' + dialogMessage)

      // iOS端 直接弹窗提示升级，点击ok后自动跳转
      if (this.$vux.platform.isIOS()) {
        this.$vux.confirm.show({
          title: '更新',
          content: dialogMessage,
          confirmText: '升级',
          onConfirm () {
            this.userWentToStoreCallback
          },
          onCancel () {
            this.userDeclinedRedirectCallback
          }
        })
        // Android端 提示升级下载最新APK文件
      } else if (this.$vux.platform.isAndroid()) {
        this.$vux.confirm.show({
          title: '更新',
          content: dialogMessage,
          confirmText: '升级',
          onConfirm () {
            this.userStartUpdateAndroidApplication
          }
        })
      }
    }
  },
  userWentToStoreCallback: function () {
    // user went to the store from the dialog
    console.log('user went to the store from the dialog')
  },
  userDeclinedRedirectCallback: function () {
    // User didn't want to leave the app.
    // Maybe he will update later.
    console.log('User did not want to leave the app')
  },
  userStartUpdateAndroidApplication: function () {
    // user start to update android app
    console.log('user start to update android app')
  }
}

module.exports = appUpdate

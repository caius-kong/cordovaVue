<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="go" link="/second"></cell>
    </group>
    <card>
      <x-img slot="header" :src="imgUrl" class="ximg-demo" container="#vux_view_box_body"></x-img>
      <div slot="content">
        <x-button @click.native="takePhoto">拍照</x-button>
      </div>
    </card>

  </div>
</template>

<script>
  import {Group, Cell, Card, XImg, XButton} from 'vux'

  export default {
    components: {
      Group,
      Cell,
      Card,
      XImg,
      XButton
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!',
        imgUrl: 'https://o5omsejde.qnssl.com/demo/test1.jpg'
      }
    },
    methods: {
      takePhoto () {
        if (!navigator.camera) {
          window.alert('Camera API not supported !')
          return
        }
        let options = {
          quality: 50,
          destinationType: navigator.camera.DestinationType.FILE_URI,
          sourceType: navigator.camera.PictureSourceType.CAMERA,
          encodingType: navigator.camera.EncodingType.JPEG,
          mediaType: navigator.camera.MediaType.PICTURE,
          allowEdit: true,
          correctOrientation: true  // Corrects Android orientation quirks
        }
        let successCallback = function (imageURI) {
          document.getElementsByClassName('ximg-demo')[0].src = imageURI
        }
        let errorCallback = function (message) {
          window.alert('error:' + message)
        }
        navigator.camera.getPicture(successCallback, errorCallback, options)
      }
    }
  }
</script>

<style scoped lang="less">
  @import '~vux/src/styles/1px.less';

  .vux-demo {
    text-align: center;
  }

  .logo {
    width: 100px;
    height: 100px
  }

  .ximg-demo {
    width: 100%;
    height: 400px;
    display: block;
  }
</style>

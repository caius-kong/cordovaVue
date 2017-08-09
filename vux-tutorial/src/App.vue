<template>
  <div style="height:100%;">
    <actionsheet :menus="menus" v-model="showMenu" show-cancel @on-click-menu="changeLocale"></actionsheet>

    <drawer
      width="200px;"
      :show.sync="drawerVisibility"
      :show-mode="showModeValue"
      :placement="showPlacementValue"
      :drawer-style="{'background-color':'#35495e', width: '200px'}">
      <!-- drawer content -->
      <div slot="drawer">
        <group title="Drawer demo">
          <cell title="Github" value="Star me" link="https://github.com/kongyunhui/vux-tutorial"
                @click.native="drawerVisibility = false">
          </cell>
        </group>
      </div>
      <!-- main content -->
      <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
        <x-header slot="header"
                  style="width:100%;position:absolute;left:0;top:0;z-index:100;"
                  :left-options="leftOptions"
                  :right-options="{showMore: true}"
                  @on-click-more="onClickMore">
          <span slot="overwrite-left" v-if="$route.path === '/'" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span>
          Demo
        </x-header>
        <router-view></router-view>
        <tabbar slot="bottom" icon-class="vux-center" class="vux-demo-tabbar">
          <tabbar-item link="/" :selected="$route.path === '/'">
            <span slot="icon" class="demo-icon-22">&#xe637;</span>
            <span slot="label">Home</span>
          </tabbar-item>
          <tabbar-item link="/second" :selected="$route.path === '/second'" badge="9">
            <span slot="icon" class="demo-icon-22">&#xe633;</span>
            <span slot="label">Android</span>
          </tabbar-item>
          <tabbar-item link="http://www.baidu.com" :selected="false" show-dot>
            <span slot="icon" class="demo-icon-22">&#xe630;</span>
            <span slot="label">IOS</span>
          </tabbar-item>
        </tabbar>
      </view-box>
    </drawer>
  </div>
</template>

<script>
  import { Group, Cell, Badge, Drawer, Actionsheet, ViewBox, XHeader, Tabbar, TabbarItem } from 'vux'

  export default {
    name: 'app',
    components: {
      Group,
      Cell,
      Badge,
      Drawer,
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      Actionsheet
    },
    data () {
      return {
        showMenu: false,
        menus: {
          'language.noop': '<span style="color: #888;">Language</span>',
          'zh-CN': '中文',
          'en': 'English'
        },
        drawerVisibility: false, // 是否展开
        showModeValue: 'push', // 展示方式 (push | overlay)
        showPlacementValue: 'left' // 显示位置 (left | right)
      }
    },
    methods: {
      onClickMore () {
        this.showMenu = true
      },
      changeLocale (value) {
        this.$vux.toast.show({
          text: value,
          type: 'success',
          position: 'middle'
        })
      }
    },
    computed: {
      leftOptions () {
        return {
          showBack: this.$route.path !== '/'
        }
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/tap.less';

  body {
    background-color: #fbf9fe;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .demo-icon-22 {
    font-family: 'vux-demo';
    font-size: 22px;
    color: #888;
  }

  @font-face {
    font-family: 'vux-demo';  /* project id 70323 */
    src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot');
    src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot?#iefix') format('embedded-opentype'),
    url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.woff') format('woff'),
    url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.ttf') format('truetype'),
    url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.svg#iconfont') format('svg');
  }

  .vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
    color: #F70968;
  }
</style>

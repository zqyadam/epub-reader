// import '@/assets/styles/iconfont.css'

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const ICONS = {
  'menu': 'iconfont icon-menu',
  'cart': 'iconfont icon-gouwuche',
  'person': 'iconfont icon-ionc--',
  'progress': 'iconfont icon-Progressread',
  'brightness': 'iconfont icon-brightness',
  'back': 'iconfont icon-fanhui',
  'A': 'iconfont icon-A'
}

Vue.use(Vuetify, {
  iconfont: 'iconfont',
  icons: ICONS
})
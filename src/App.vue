<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
      v-show="show"
    >
    </v-toolbar>
    <v-content>
      <HelloWorld/>
    </v-content>
    <v-bottom-nav
      fixed
      :value="true"
      :active.sync="bottomNav"
      v-show="show"
      transition="slide-y-reverse-transition"
    >
      <v-btn light :ripple="false">
        <span>目录</span>
        <v-icon>$vuetify.icons.menu</v-icon>
      </v-btn>
      <v-btn light :ripple="false">
        <span>进度</span>
        <v-icon>$vuetify.icons.progress</v-icon>
      </v-btn>
      <v-btn light :ripple="false">
        <span>亮度</span>
        <v-icon>$vuetify.icons.brightness</v-icon>
      </v-btn>
      <v-btn light :ripple="false">
        <span>字体</span>
        <v-icon>$vuetify.icons.A</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      show: true,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      bottomNav:-1,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style>
@import 'http://at.alicdn.com/t/font_808278_bf3dfppm0lg.css';

.v-bottom-nav .v-btn--active .v-btn__content{
  font-size:10px;
}
</style>

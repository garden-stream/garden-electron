<style>
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body { 
    height: 100%; 
  }
  body {
    background-size: cover;
  }

</style>

<template>
  <div >
    <router-view></router-view>
  </div>
</template>

<script>
  import 'material-design-lite/material.min.js'
  import Trianglify from 'trianglify/dist/trianglify.min.js'
  // import Vue from 'vue'
  // let eventHub = new Vue()
  export default {
    data: () => {
      return {
        token: ''
      }
    },
    created () {
      console.log('created App.vue')
      this.$on('login', this.doLogin)
    },
    mounted () {
      let bg = Trianglify({width: 1920, height: 1080, cell_size: 40, seed: 'o4u51', x_colors: 'GnBu'}).png()
      let base = document.querySelector('body')
      base.style.background = 'url(' + bg + ') no-repeat center center'
    },
    methods: {
      doLogin (data) {
        console.log('username', data)
      }
    }
  }
</script>

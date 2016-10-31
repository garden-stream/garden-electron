<style>
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body { 
    height: 100%; 
    overflow-y: unset;
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
  import Trianglify from 'trianglify/dist/trianglify.min.js'
  // import Vue from 'vue'
  // let eventHub = new Vue()
  export default {
    created () {
      console.log('created App.vue')
    },
    computed: {
      token () {
        return this.$store.state.token
      },
      isAuthenticated () {
        return this.$store.state.isAuthenticated
      }
    },
    watch: {
      token () {
        if (this.isAuthenticated) {
          this.$router.push('/home')
        }
      }
    },
    mounted () {
      let bg = Trianglify({width: 1920, height: 1080, cell_size: 40, seed: 'o4u51', x_colors: 'GnBu'}).png()
      let base = document.querySelector('body')
      base.style.background = 'url(' + bg + ') no-repeat center center'
    },
    methods: {
    }
  }
</script>

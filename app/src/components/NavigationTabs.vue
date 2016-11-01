<style lang="sass" scoped>
  .tabs
    z-index: 1
    position: relative
</style>

<template>
  <div class="tabs">
      <ul class="is-left">
        <router-link tag="li" to="/home/user/me" active-class="is-active" exact><a>My Content</a></router-link>
        <router-link tag="li" to="/home/add" active-class="is-active"><a>Add Post</a></router-link>
        <router-link tag="li" to="/home/following" active-class="is-active"><a>Following</a></router-link>
        <router-link tag="li" to="/home/followers" active-class="is-active"><a>Followers</a></router-link>
        <router-link tag="li" to="/home/browse" active-class="is-active"><a>Browse Users</a></router-link>
      </ul>
      <ul class="is-right">
        <li><router-link to="/">Logout</router-link></li>
      </ul>
    </div>
</template>

<script>
  export default {
    components: {
    },
    created () {
    },
    methods: {
    },
    name: 'navigation-tabs'
  }
</script>

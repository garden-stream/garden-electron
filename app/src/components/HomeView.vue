<style scoped lang="sass">
  h1
    margin-top: 0
  .page
    display: flex
    flex-flow: column nowrap
    align-items: center
    height: 100%
  .tabs
    width: 100%
    background-color: white
  .top-pad
</style>

<template>
  <div class='page'>
    <navigation-tabs></navigation-tabs>
    <router-view class='top-pad'></router-view>
  </div>
</template>

<script>
  import NavigationTabs from './NavigationTabs'
  export default {
    components: {
      NavigationTabs
    },
    created () {
      this.$http.get('user/' + this.$store.state.user.username)
      .then((res) => {
        // this.users = res.body
        console.log('this.user:', res.body)
        this.$store.commit('setUser', res.body)
      }, (res) => {
        console.log('err', res)
      })
    },
    name: 'home-page'
  }
</script>

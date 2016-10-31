<style scoped lang="sass">
  h1
    margin-top: 0
  .page
    display: flex
    flex-flow: column nowrap
    align-items: center
  .tabs
    width: 100%
    background-color: white
</style>

<template>
  <div class='page'>
    <navigation-tabs></navigation-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavigationTabs from './NavigationTabs'
  export default {
    components: {
      NavigationTabs
    },
    name: 'home-page'
  }
</script>

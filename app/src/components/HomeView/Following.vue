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
  <section class='page--content'>
    <notification notifType="is-info">
      <h1 slot="header">Heads up!</h1>
      <p>It looks like you don't follow any users yet!</p>
      <p>Head to the <router-link to="browse">Browse users</router-link> tab to find some to follow.</p>
    </notification>
  </section>
</template>

<script>
  import Notification from './Notification'
  export default {
    data: () => {
      return {
      }
    },
    components: {
      Notification
    },
    name: 'following'
  }
</script>

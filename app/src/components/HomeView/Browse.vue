<style scoped lang="sass">
  .page
    display: flex
    flex-flow: row nowrap
    align-items: flex-start
    justify-content: space-around
    width: 100%
</style>
<template>
  <section class='page'>
    <user-card v-for="user in users" :user="user" :hasBigImage="false"></user-card>
  </section>
</template>

<script>
  import UserCard from '../UserCard'
  export default {
    data: () => {
      return {
        users: []
      }
    },
    created () {
      this.$http.get('user')
      .then((res) => {
        // console.log('res', res)
        this.users = res.body
        console.log('this.users:', this.users)
      }, (res) => {
        console.log('err', res)
      })
    },
    components: {
      UserCard
    },
    name: 'browse'
  }
</script>

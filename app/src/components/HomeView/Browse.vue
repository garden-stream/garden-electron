<style scoped lang="sass">
  .page
    display: flex
    flex-flow: row wrap
    align-items: flex-start
    justify-content: space-between
    width: 100%
    .card:last-child
      margin-right: auto
</style>
<template>
  <section class='page'>
    <user-card v-for="user in users" :user="user" :hasBigImage="false" :isFollowing="isfollowing(user)"></user-card>
  </section>
</template>

<script>
  import UserCard from '../UserCard'
  import ProgressSpinner from '../Spinner'
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
    methods: {
      isfollowing (user) {
        let results = this.$store.state.user.following.filter((_id) => {
          return user._id === _id
        })
        return results.length
      }
    },
    components: {
      UserCard,
      ProgressSpinner
    },
    name: 'browse'
  }
</script>

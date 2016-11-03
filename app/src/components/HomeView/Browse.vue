<style scoped lang="sass">
  .page
    display: flex
    flex-flow: row wrap
    align-items: flex-start
    justify-content: flex-start
    width: 100%
    .card
      min-width: 29vw
      // margin-right: auto
  .spinner-center
    align-self: center
</style>
<template>
  <section class='page'>
    <progress-spinner class='spinner-center' v-show="isLoading"></progress-spinner>
    <user-card v-for="user in users" :user="user" :hasBigImage="false" :isFollowing="isfollowing(user)"></user-card>
  </section>
</template>

<script>
  import UserCard from '../UserCard'
  import ProgressSpinner from '../Spinner'
  export default {
    data: () => {
      return {
        users: [],
        isLoading: true
      }
    },
    created () {
      this.$http.get('user')
      .then((res) => {
        // console.log('res', res)
        this.users = res.body
        this.isLoading = false
        console.log('this.users:', this.users)
      }, (res) => {
        this.isLoading = false
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

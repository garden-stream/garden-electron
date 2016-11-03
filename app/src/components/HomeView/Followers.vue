<style scoped lang="sass">
  h1
    margin-top: 0
  .page--content
    position: relative
    z-index: 2
    display: flex
    flex-flow: column nowrap
    height: 90vh
    width: 100%
    align-items: center
    overflow-y: auto
    overflow-x: hidden
  .card
    transition: all 250ms ease-in-out
    &:hover
      cursor: pointer
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 5px rgba(10, 10, 10, 0.1) 
</style>

<template>
  <section class='page--content'>
    <progress-spinner class='spinner-center' v-show="isLoading"></progress-spinner>
    <notification v-if="!users.length && !isLoading" notifType="is-info">
      <h1 slot="header">Heads up!</h1>
      <p>It looks like you don't have any followers yet</p>
      <p>Head to the <router-link to="browse">Browse users</router-link>
       tab to find some to follow, and maybe someone will follow you back!</p>
    </notification>
    <a @click="goToUser(user)" v-else v-for="user in users"><user-card :user="user" :isFollowing="isfollowing(user)"></user-card></a>
  </section>
</template>

<script>
  import Notification from './Notification'
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
      this.$http.get('user/' + this.$store.state.user.username + '/followers')
      .then((res) => {
        // console.log('res', res)
        this.users = res.body
        console.log('this.users:', this.users)
        this.isLoading = false
      }, (res) => {
        console.log('err', res)
        this.isLoading = false
      })
    },
    components: {
      Notification,
      ProgressSpinner,
      UserCard
    },
    methods: {
      goToUser (user) {
        console.log('going to user...', user.username)
        this.$router.push({
          name: 'user-profile',
          params: { user: user }
        })
      },
      isfollowing (user) {
        let results = this.$store.state.user.following.filter((_id) => {
          return user._id === _id
        })
        return results.length
      }
    },
    name: 'followers'
  }
</script>

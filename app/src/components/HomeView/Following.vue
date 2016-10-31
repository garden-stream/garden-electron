<style scoped lang="sass">
  h1
    margin-top: 0
  .page
    display: flex
    flex-flow: column wrap
    align-items: center
  .card
    transition: all 250ms ease-in-out
    &:hover
      cursor: pointer
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 5px rgba(10, 10, 10, 0.1) 
</style>

<template>
  <section class='page--content'>
    <notification v-if="!users.length" notifType="is-info">
      <h1 slot="header">Heads up!</h1>
      <p>It looks like you don't follow any users yet!</p>
      <p>Head to the <router-link to="browse">Browse users</router-link> tab to find some to follow.</p>
    </notification>
    <a @click="goToUser(user)" v-else v-for="user in users"><user-card :user="user" :isFollowing="true"></user-card></a>
  </section>
</template>

<script>
  import Notification from './Notification'
  import UserCard from '../UserCard'
  export default {
    data: () => {
      return {
        users: []
      }
    },
    created () {
      this.$http.get('user/' + this.$store.state.user.username + '/following')
      .then((res) => {
        // console.log('res', res)
        this.users = res.body
        console.log('this.users:', this.users)
      }, (res) => {
        console.log('err', res)
      })
    },
    components: {
      Notification,
      UserCard
    },
    methods: {
      goToUser (user) {
        console.log('going to user...', user.username)
        this.$router.push({
          name: 'user-profile',
          params: { user: user }
        })
      }
    },
    name: 'following'
  }
</script>

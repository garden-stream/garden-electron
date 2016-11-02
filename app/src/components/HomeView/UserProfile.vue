<style lang="sass">
  .profile-container
    width: 100%
    height: 90vh
    overflow-y: auto
    overflow-x: hidden
    display: flex
    flex-flow: column nowrap
    align-items: center
  .user-profile
    width: 100%
    align-self: flex-start
    flex: 1
    display: flex
    flex-flow: row wrap
    align-items: space-around
    justify-content: space-around
    max-height: 300px
    perspective: 1000px
    &:last-child
      margin-right: auto
  iframe
    max-height: 200px
</style>

<template>
  <section class='profile-container'>
    <user-card :user="userData" :hasDescription="true" :isFollowing="isfollowing(user)" style="flex: 0"></user-card>
    <progress-spinner class='spinner-center' v-show="isLoadingPosts"></progress-spinner>
    <section class='user-profile'>
      <content-card v-for="post in posts" :post="post" :showAuthor="false"></content-card>
    </section>
  </section>
</template>

<script>
  import UserCard from '../UserCard'
  import ContentCard from './ContentCard'
  import ProgressSpinner from '../Spinner'
  export default {
    data: () => {
      return {
        userData: {},
        isLoadingUser: true,
        isLoadingPosts: true,
        posts: []
      }
    },
    computed: {
      username () {
        return this.$store.state.user.username
      },
      user () {
        if (this.$route.params.user === 'me') {
          return this.$store.state.user
        } else {
          return this.$route.params.user
        }
      },
      isOwner () {
        return this.$route.params.user === 'me'
      }
    },
    components: {
      UserCard,
      ContentCard,
      ProgressSpinner
    },
    watch: {
      $route: 'fetchData'
    },
    mounted () {
      console.log('getting data')
      this.fetchData()
    },
    methods: {
      isfollowing (user) {
        let results = this.$store.state.user.following.filter((_id) => {
          return user._id === _id
        })
        return results.length
      },
      fetchData () {
        this.isLoadingUser = true
        this.isLoadingPosts = true
        this.$http.get('user/' + this.user.username)
        .then((res) => {
          console.log('res', res.body)
          this.userData = res.body
          this.isLoadingUser = false
        }, (res) => {
          console.log('err', res)
          this.isLoadingUser = false
        })
        this.$http.get('user/' + this.user.username + '/posts')
        .then((res) => {
          console.log('res', res.body)
          this.posts = res.body
          this.isLoadingPosts = false
        }, (res) => {
          console.log('err', res)
          this.isLoadingPosts = false
        })
      },
      followUser () {
        console.log('following:', this.user.username)
        this.$http.post('user/' + this.user._id + '/follow', {
          token: this.$store.state.token
        })
        .then((res) => {
          console.log('res', res)
          this.users = res.body
          this.$store.commit('setUser', res.body)
          console.log('this.users:', this.users)
        }, (res) => {
          console.log('err', res)
        })
      }
    },
    name: 'user-profile'
  }
</script>

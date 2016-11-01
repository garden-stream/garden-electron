<style scoped lang="sass">
  .user-profile
    flex: 1
    width: 100%
    height: 90vh
    overflow-y: auto
    overflow-x: hidden
    display: flex
    flex-flow: column nowrap
    align-items: center
</style>

<template>
  <section class='user-profile'>
    <user-card :user="userData" :hasDescription="true" :isFollowing="isfollowing(user)" style="flex: 0"></user-card>
    <content-card v-for="post in posts" :post="post" :showAuthor="false"></content-card>
  </section>
</template>

<script>
  import UserCard from '../UserCard'
  import ContentCard from './ContentCard'
  export default {
    data: () => {
      return {
        userData: {}
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
      posts () {
        if (this.userData.posts) {
          return this.userData.posts.reverse()
        }
      },
      isOwner () {
        return this.$route.params.user === 'me'
      }
    },
    components: {
      UserCard,
      ContentCard
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
        this.$http.get('user/' + this.user.username)
        .then((res) => {
          console.log('res', res.body)
          this.userData = res.body
        }, (res) => {
          console.log('err', res)
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
          console.log('this.users:', this.users)
        }, (res) => {
          console.log('err', res)
        })
      }
    },
    name: 'user-profile'
  }
</script>

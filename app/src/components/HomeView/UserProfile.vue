<style scoped lang="sass">
  .user-profile
    flex: 1
</style>

<template>
  <section class='user-profile'>
    <user-card :user="userData" :hasDescription="true"></user-card>
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

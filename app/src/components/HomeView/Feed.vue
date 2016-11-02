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
    <notification v-if="!posts.length && !isLoading" notifType="is-info">
      <h1 slot="header">Heads up!</h1>
      <p>there aren't any posts in your feed</p>
      <p>Head to the <router-link to="browse">Browse users</router-link> tab to find someone to follow.</p>
    </notification>
    <content-card v-for="post in posts" :post="post" :showAuthor="true" :user="post.author_id"></content-card>
  </section>
</template>

<script>
  import Notification from './Notification'
  import ContentCard from './ContentCard'
  import ProgressSpinner from '../Spinner'
  export default {
    data: () => {
      return {
        posts: [],
        isLoading: true
      }
    },
    created () {
      this.$http.get('feed', {
        headers: {
          token: this.$store.state.token
        }
      })
      .then((res) => {
        // console.log('res', res)
        this.posts = res.body
        console.log('this.posts:', this.posts)
        this.isLoading = false
      }, (res) => {
        console.log('err', res)
        this.isLoading = false
      })
    },
    components: {
      Notification,
      ProgressSpinner,
      ContentCard
    },
    methods: {
      // goToUser (user) {
      //   console.log('going to user...', user.username)
      //   this.$router.push({
      //     name: 'user-profile',
      //     params: { user: user }
      //   })
      // },
      // isfollowing (user) {
      //   let results = this.$store.state.user.following.filter((_id) => {
      //     return user._id === _id
      //   })
      //   return results.length
      // }
    },
    name: 'feed'
  }
</script>

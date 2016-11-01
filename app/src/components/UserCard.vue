<style scoped lang="sass">
  .card
    margin: 1em
    margin-top: 0em
    flex: 0
    min-width: 150px
    transition: all 250ms ease-in-out
    &:hover
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 5px rgba(10, 10, 10, 0.1)
  .card-content .media
    &:hover
      cursor: pointer 
</style>

<template>
  <div class="card">
    <div v-if="hasBigImage" class="card-image">
      <figure class="image is-4by3">
        <img src="http://placehold.it/300x225" alt="">
      </figure>
    </div>
    <div class="card-content">
      <div class="media" @click="goToUser(user)">
        <div class="media-left" >
          <figure class="image is-32x32">
            <img src="http://placehold.it/64x64" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">{{user.username}}</p>
        </div>
      </div>
      <div v-if="hasDescription" class="content">
        sometime we'll add a description to a user, and it will go here.
      </div>
    </div>
    <footer class="card-footer">
      <progress-spinner class='spinner-center' v-show="isLoading"></progress-spinner>
      <a v-if="!isFollowing && !isUser && canFollow" @click="followUser" class="card-footer-item">Follow</a>
      <a v-if="isFollowing" class="card-footer-item is-disabled">Following</a>
    </footer>
  </div>
</template>

<script>
  import ProgressSpinner from './Spinner'
  export default {
    data: () => {
      return {
        canFollow: true,
        isLoading: false
      }
    },
    props: ['user', 'hasBigImage', 'hasDescription', 'isFollowing', 'titleclick'],
    computed: {
      username () {
        return this.$store.state.user.username
      },
      isUser () {
        return this.username === this.user.username
      }
    },
    components: {
      ProgressSpinner
    },
    methods: {
      goToUser (user) {
        console.log('going to user...', user.username)
        this.$router.push({
          name: 'user-profile',
          params: { user: user }
        })
      },
      followUser () {
        console.log('following:', this.user.username)
        this.canFollow = false
        this.isLoading = true
        this.$http.post('user/' + this.user._id + '/follow', {
          token: this.$store.state.token
        })
        .then((res) => {
          console.log('res', res)
          this.isLoading = false
          this.users = res.body
          console.log('this.users1:', this.users)
          this.$store.commit('setUser', res.body)
          this.canFollow = false
        }, (res) => {
          console.log('err', res)
          this.isLoading = false
          this.canFollow = true
        })
      }
    },
    name: 'user-card'
  }
</script>

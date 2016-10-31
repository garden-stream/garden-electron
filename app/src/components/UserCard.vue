<style scoped lang="sass">
  .card
    margin: 1em
    margin-top: 0em
    flex: 1
</style>

<template>
  <div class="card">
    <div v-if="hasBigImage" class="card-image">
      <figure class="image is-4by3">
        <img src="http://placehold.it/300x225" alt="">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
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
      <a v-if="!isFollowing && !isUser" @click="followUser" class="card-footer-item">Follow</a>
    </footer>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
      }
    },
    props: ['user', 'hasBigImage', 'hasDescription', 'isFollowing'],
    computed: {
      username () {
        return this.$store.state.user.username
      },
      isUser () {
        return this.username === this.user.username
      }
    },
    components: {
    },
    methods: {
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
    name: 'user-card'
  }
</script>

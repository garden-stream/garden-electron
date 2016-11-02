<style scoped lang="sass">
.spinner-center
  margin-left: auto
  margin-right: auto

.toggle-enter-active, .toggle-leave-active
  transition: opacity .5s
.toggle-enter, .toggle-leave-active 
  opacity: 0
.card
  display: flex
  flex-flow: column nowrap
.card-footer-item
  padding: unset
  border-radius: 0
</style>
<template>
  <div class="card">
    <progress-spinner class='spinner-center' v-show="isLoggingIn"></progress-spinner>
    <form v-show="!isLoggingIn" @submit.prevent="login">
      <header class="card-header">
        <p class="card-header-title">
          Login
        </p>
      </header>
      <div class="card-content">
        <label class="label">Username</label>
        <p class="control">
          <input class="input" v-model="username" type="text" placeholder="joeSmith" required>
        </p>
        <label class="label">Password</label>
        <p class="control">
          <input class="input" v-model="password" type="password" placeholder="*******" required>
        </p>
      </div>
      <footer class="card-footer">
        <button type="submit" class="card-footer-item button is-primary">Sign In</button>
      </footer>
    </form>
  </div>
</template>

<script>
  import ProgressSpinner from '../Spinner'
  // import Vue from 'vue'
  // let eventHub = new Vue()
  export default {
    components: {
      ProgressSpinner
    },
    data: () => {
      return {
        username: '',
        password: '',
        password2: '',
        isSigningUp: false,
        isLoggingIn: false
      }
    },
    mounted () {
    },
    methods: {
      login () {
        let action = 'login'
        if (this.isSigningUp) {
          action = 'signup'
          if (this.password !== this.password2) {
            this.isLoggingIn = false
            return false
          }
        }
        this.isLoggingIn = true
        console.log('logging in')
        this.$http.post('auth/' + action, {
          username: this.username,
          password: this.password
        }).then((res) => {
          console.log('res', res)
          this.isLoggingIn = false
          this.$store.commit('setToken', res.body.token)
          this.$store.commit('setIsAuthenticated', true)
          this.$store.commit('setUser', { username: res.body.username })
          console.log('emitted event!')
        }, (res) => {
          console.log('failed res', res)
          this.isLoggingIn = false
        })
      },
      toggleSignUp () {
        console.log('toggle')
        this.isSigningUp = (!this.isSigningUp)
        console.log(this.isSigningUp)
      }
    }
  }
</script>
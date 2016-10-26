<style scoped lang="sass">
.spinner-center
  margin-left: auto
  margin-right: auto

.toggle-enter-active, .toggle-leave-active
  transition: opacity .5s
.toggle-enter, .toggle-leave-active 
  opacity: 0

</style>
<template>
  <div class="mdl-card mdl-shadow--2dp">
    <progress-spinner class='spinner-center' v-show="isLoggingIn"></progress-spinner>
    <form v-show="!isLoggingIn" @submit.prevent='login'>
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Login</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">
          <input @click="toggleSignUp" type="checkbox" id="checkbox-2" class="mdl-checkbox__input">
          <span class="mdl-checkbox__label">New user</span>
        </label>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" v-model='username' type="text" id="username">
          <label class="mdl-textfield__label" for="username">Username</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" v-model='password' type="password" id="password">
          <label class="mdl-textfield__label" for="password">Password</label>
        </div>
        <transition name="toggle">
          <div v-show="isSigningUp" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" v-model='password2' type="password" id="password2`">
            <label class="mdl-textfield__label" for="password2">Repeat Password</label>
          </div>
        </transition>
      </div>
      <div class="mdl-card__actions">
        <button class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>Sign In</button>
      </div>
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
          this.$emit('login', res.body)
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
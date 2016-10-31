<style lang="sass">
  h1
    margin-top: 0
  .login-page
    display: flex
    flex-flow: column nowrap
    align-items: center
  .login-page--forms
    display: flex
    flex-flow: row nowrap
    align-items: flex-start
    justify-content: space-around
    background-color: unset
    width: 100%
</style>

<template>
  <div class='login-page'>
    <h1 class='title is-1'>garden</h1>
    <section class='login-page--forms'>
      <login-form></login-form>
      <sign-up-form></sign-up-form>
    </section>
  </div>
</template>

<script>
  import LoginForm from './LoginPageView/LoginForm'
  import SignUpForm from './LoginPageView/SignUpForm'
  export default {
    components: {
      LoginForm,
      SignUpForm
    },
    created () {
      this.$on('login', this.doLogin)
    },
    methods: {
    },
    name: 'login-page'
  }
</script>

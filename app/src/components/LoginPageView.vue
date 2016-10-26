<style scoped lang="sass">
  h1
    margin-top: 0
  .login-page
    display: flex
    flex-flow: column nowrap
    align-items: center
</style>

<template>
  <div class='login-page'>
    <h1>garden</h1>
    <login-form></login-form>
  </div>
</template>

<script>
  import LoginForm from './LoginPageView/LoginForm'
  export default {
    components: {
      LoginForm
    },
    name: 'login-page'
  }
</script>

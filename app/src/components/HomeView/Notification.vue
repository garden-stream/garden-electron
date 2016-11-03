<style scoped lang="sass">
  h1
    margin-top: 0
  .page
    display: flex
    flex-flow: column nowrap
    align-items: center
  .tabs
    width: 100%
    background-color: white
</style>

<template>
  <article class="message" :class="[notifType]">
    <div class="message-header">
      <slot name="header"></slot>
    </div>
    <div class="message-body">
      <slot></slot>
    </div>
  </article>
</template>

<script>
  export default {
    data: () => {
      return {
      }
    },
    props: ['notifType'],
    components: {
    },
    name: 'home-page'
  }
</script>

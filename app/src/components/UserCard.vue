<style scoped lang="sass">
  
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
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
      }
    },
    props: ['user', '_id', 'hasBigImage', 'hasDescription'],
    components: {
    },
    name: 'user-card'
  }
</script>

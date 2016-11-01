<style scoped lang="sass" scoped>
  .card
    margin: 1em
    margin-top: 0
</style>

<template>
  <div class="card">
    <div v-if='isImage' class="card-image">
      <figure class="image is-4by3">
        <img src="http://placehold.it/300x225" alt="">
      </figure>
    </div>
    <div class="card-content">
      <div class="media" v-if="showAuthor">
        <div class="media-left">
          <figure class="image is-32x32">
            <img src="http://placehold.it/64x64" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div v-if="hasText" class="content">
        {{post.content}}
        <br/>
        <small>{{date}}</small>
      </div>
      <div v-if="post.contentType === 'webremix'" class="content">
        <div v-html="post.content"></div>
        <br/>
        <small>{{date}}</small>
      </div>
    </div>
  </div>
</template>

<script>
  let moment = require('moment')
  export default {
    data: () => {
      return {
      }
    },
    computed: {
      hasText () {
        return this.post.contentType === 'text'
      },
      isImage () {
        return this.post.contentType === 'image'
      },
      date () {
        return moment(this.post.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')
      }
    },
    props: ['showAuthor', 'post']
  }
</script>
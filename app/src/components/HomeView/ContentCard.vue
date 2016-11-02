<style scoped lang="sass" scoped>
  .card
    margin: 1em
    margin-top: 0
    opacity: 0
    animation: webremix 600ms ease-in forwards
  
  .content
   display: flex
   flex-flow: column nowrap
   justify-content: space-between
  @keyframes webremix
    0%
      opacity: 0
      transform: scale(0.3) rotateY(90deg)
    60%
      transform: scale(1.4)
    90%
      transform: scale(0.9)
    100%
      opacity: 1
      
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
          <p class="title is-5">{{user.username}}</p>
          <p class="subtitle is-6">{{user.username}}</p>
        </div>
      </div>

      <div v-if="hasText" class="content">
        <small>{{date}}</small>
        <br/>
        {{post.content}}
      </div>
      <div v-if="post.contentType === 'webremix'" class="content webremix">
        <small>{{date}}</small>
        <br/>
        <div v-html="post.content"></div>
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
    props: ['showAuthor', 'post', 'user']
  }
</script>
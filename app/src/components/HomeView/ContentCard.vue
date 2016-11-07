<style scoped lang="sass" scoped>
  .card
    margin: 1em
    margin-top: 0
    opacity: 1
    perspective: 1000px
    animation: webremix 400ms ease-in forwards
  .content
   display: flex
   flex-flow: column nowrap
   justify-content: space-between
   
  .avatar
    padding: .5em
    width: 32px
    height: 32px
    border-radius: 50%
    color: white
    text-align: center
    text-shadow: 0px 0px 5px black
  @keyframes webremix
    0%
      opacity: 0
      transform: scale(0.3) rotateX(-90deg)
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
        <div class="media-left avatar" :style="backgroundColor">
          <span class="user-avatar">{{firstLetter}}</span>
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
      },
      firstLetter () {
        return this.user.username.slice(0, 2)
      },
      backgroundColor () {
        return 'background-color: #' + this.intToRGB(this.hashCode(this.user.username))
      }
    },
    methods: {
      hashCode (str) { // java String#hashCode
        let hash = 0
        for (var i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash)
        }
        return hash
      },
      intToRGB (i) {
        let c = (i & 0x00FFFFFF)
          .toString(16)
          .toUpperCase()

        return '00000'.substring(0, 6 - c.length) + c
      }
    },
    props: ['showAuthor', 'post', 'user']
  }
</script>
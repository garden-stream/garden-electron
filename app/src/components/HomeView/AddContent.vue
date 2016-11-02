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
    <progress-spinner class='spinner-center' v-show="isSubmitting"></progress-spinner>
    <progress-success class='spinner-center' v-show="isSuccessfull"></progress-success>
    <progress-fail class='spinner-center' v-show="isFailure"></progress-fail>
    <form v-show="!isSubmitting" @submit.prevent="addPost">
      <header class="card-header">
        <p class="card-header-title">
          Add Post
        </p>
      </header>
      <div class="card-content">
        <label class="label">Content</label>
        <p class="control">
          <input class="input" @keyup="logChange($event)" v-model="content" type="text" placeholder="drop text or a link" required>
        </p>
      </div>
      <footer class="card-footer">
        <button type="submit" class="card-footer-item button is-primary">Save</button>
      </footer>
    </form>
  </div>
</template>

<script>
  const remix = require('webremix')
  const sanitizer = require('sanitizer')
  import ProgressSpinner from '../Spinner'
  import ProgressSuccess from '../Success'
  import ProgressFail from '../Failure'
  import UserTag from '../UserTag'
  // import Vue from 'vue'
  // let eventHub = new Vue()
  export default {
    components: {
      ProgressSpinner,
      ProgressSuccess,
      ProgressFail,
      UserTag
    },
    data: () => {
      return {
        content: '',
        originalContent: '',
        contentType: 'text',
        isSubmitting: false,
        isSuccessfull: false,
        isFailure: false
      }
    },
    watch: {
      content () {
        this.isFailure = false
        // console.log('change..', this.content)
      }
    },
    mounted () {
    },
    methods: {
      logChange (key) {
        if (key.keyCode === 50) {
          console.log('got @ sign')
          console.log('children:', this.$children)
          // this.$addChild(UserTag)
        } else {
          console.log('change log..', key)
        }
      },
      addPost () {
        this.isSubmitting = true
        this.isFailure = false
        console.log('adding post')
        this.originalContent = this.content
        this.content = sanitizer.sanitize(this.content)
        remix.generate(this.content, {
          width: '100%',
          height: 200
        }, (err, resp) => {
          if (err) {
            console.warn('err!', err)
          } else {
            console.log('resp:', resp)
            this.content = resp
            this.contentType = 'webremix'
            this.$http.post('post', {
              contentType: this.contentType,
              content: this.content,
              token: this.$store.state.token
            }).then((res) => {
              console.log('res', res)
              this.isSubmitting = false
              this.isSuccessfull = true
              console.log('added post!')
              this.content = ''
            }, (res) => {
              console.log('failed res', res)
              this.isSubmitting = false
              this.isFailure = true
              this.content = this.originalContent
            })
          }
        })
      }
    }
  }
</script>
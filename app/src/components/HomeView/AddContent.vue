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
    <transition name="toggle">
      <progress-spinner class='spinner-center' v-show="isSubmitting"></progress-spinner>
    </transition>
    <form @submit.prevent="addPost">
      <header class="card-header">
        <p class="card-header-title">
          Add Post
        </p>
      </header>
      <div class="card-content">
        <label class="label">Content</label>
        <p class="control">
          <input class="input" v-model="content" type="text" placeholder="drop text or a link" required>
        </p>
        <label class="label">Content Type</label>
        <p class="control">
          <span class="select">
            <select v-model="contentType">
              <option value='text'>Text</option>
              <option value='link'>Link</option>
              <option value='image'>Image</option>
              <option value='video'>Video</option>
            </select>
          </span>
        </p>
      </div>
      <footer class="card-footer">
        <button type="submit" class="card-footer-item button is-primary">Save</button>
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
        content: '',
        contentType: 'text',
        isSubmitting: false
      }
    },
    mounted () {
    },
    methods: {
      addPost () {
        this.isSubmitting = true
        console.log('adding post')
        this.$http.post('post', {
          contentType: this.contentType,
          content: this.content,
          token: this.$store.state.token
        }).then((res) => {
          console.log('res', res)
          this.isSubmitting = false
          console.log('added post!')
        }, (res) => {
          console.log('failed res', res)
          this.isSubmitting = false
        })
      }
    }
  }
</script>
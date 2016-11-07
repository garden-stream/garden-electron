<style scoped lang="sass">
.spinner
  width: 20px
  height: 20px
  background: rgb(192, 231, 192)
  border-radius: 50%
  position: relative
  margin-top: 10px
  margin-bottom: 10px
  margin-left: auto
  margin-right: auto
  display: inline-block
  
  &:after, &:before
    content: ''
    display: block
    width: 20px
    height: 20px
    
    border-radius: 50%
  &:after
    position: absolute
    top: 0px
    left: 0px
    border: 4px solid transparent
    border-top-color: rgb(105,240,174)
    border-bottom-color: rgb(105,240,174)
    animation: spinner 1s linear infinite
    
@keyframes spinner
  0%
    transform: rotate(0deg) scale(1)
    opacity: 1
  50%
    transform: rotate(180deg) scale(1.2)
    
  75%
    transform: rotate(230deg) scale(1.01)
  
  100%
    transform: rotate(360deg) scale(1)
    opacity: 1
</style>

<template>
  <div class='spinner'></div>
</template>
<style scoped lang="sass">
.spinner
  width: 100px
  height: 100px
  background: rgb(192, 231, 192)
  border-radius: 50%
  position: relative
  margin-top: 50px
  margin-bottom: 50px
  display: inline-block
  
  &:after, &:before
    content: ''
    display: block
    width: 100px
    height: 100px
    
    border-radius: 50%
  &:after
    position: absolute
    top: -4px
    left: -4px
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
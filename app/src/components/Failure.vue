<style scoped lang="sass">
.success
  width: 100px
  height: 100px
  background: rgb(192, 231, 192)
  border-radius: 50%
  position: relative
  margin-top: 50px
  margin-bottom: 50px
  margin-left: auto
  margin-right: auto
  display: inline-block
  perspective: 1000px
  
  &:after, &:before
    content: ''
    display: block
    width: 100px
    height: 100px
    
    border-radius: 50%
  &:after
    position: absolute
    top: 0px
    left: 0px
    border: 4px solid transparent
    border-top-color: rgb(105,240,174)
    border-bottom-color: rgb(105,240,174)
    animation: spinnerFail 1s linear forwards
  i 
    position: absolute
    top: 12px
    left: 4px
    transform-origin: top center
    animation: iconLoadFail 1s ease-in-out forwards
    
@keyframes iconLoadFail
  0% 
    opacity: 0
    transform: rotateX(-90deg) scale(1)
  50%
    opacity: 0
    color: transparent
    transform: rotateX(-90deg) scale(1.5)
  100%
    opacity: 1
    transform: rotateX(0deg) scale(1)
    color: red
    
@keyframes spinnerFail
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
    border-color: red
</style>

<template>
  <div class='success'><i class='fa fa-close fa-fw fa-5x'></i></div>
</template>
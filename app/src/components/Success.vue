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
  animation: shrinkOut 2s linear forwards
  
  &:after, &:before
    content: ''
    display: block
    width: 100px
    height: 100px
    border-radius: 50%
  &:before
    animation: shrinkOut 2s linear forwards
  &:after
    position: absolute
    top: 0px
    left: 0px
    border: 4px solid transparent
    border-top-color: rgb(105,240,174)
    border-bottom-color: rgb(105,240,174)
    animation: spinnerSuccess 2s linear forwards
  i 
    position: absolute
    top: 16px
    left: 16px
    transform-origin: top center
    animation: iconLoad 2s ease-in-out forwards
    
@keyframes shrinkOut
  99%
    height: 100px
    margin-top: 50px
    margin-bottom: 50px
  100%
    height: 0px
    margin-top: 0px
    margin-bottom: 0px
    
@keyframes iconLoad
  0% 
    opacity: 0
    transform: rotateX(-90deg) scale(1)
  25%
    opacity: 0
    color: transparent
    transform: rotateX(-90deg) scale(1.5)
  50%
    opacity: 1
    transform: rotateX(0deg) scale(1)
    color: green
  100%
    opacity: 0
    transform: rotateX(-90deg) scale(1)
    
@keyframes spinnerSuccess
  0%
    transform: rotate(0deg) scale(1)
    opacity: 1
  25%
    transform: rotate(180deg) scale(1.2)
    
  50%
    transform: rotate(230deg) scale(1.01)
    
  75%
    transform: rotate(360deg) scale(1)
    opacity: 1
    border-color: green
    
  100%
    transform: rotate(180deg) scale(1.2)
    opacity: 0
</style>

<template>
  <div class='success'><i class='fa fa-check fa-5x'></i></div>
</template>
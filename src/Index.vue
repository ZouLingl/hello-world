<template>
  <div id="index">
    <router-view/>
    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>  
  </div>
  
</template>

<style>

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
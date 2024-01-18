<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>


<style lang="scss">
:root {
  --primary: #EFF0F4; 
  --secondary: #FC9C71; /* Secondary color */
  --bg-color: #1A202C; /* Background color */
  --text-color: #333; /* Primary text color */
  --text-color-light: #D9D9D9; /* Light text color for use on dark backgrounds */
  --border: #FC9C71; /* Border color */
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>

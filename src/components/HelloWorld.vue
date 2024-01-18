<template>
  <div class="electrician-component">
<div><NavigationBar></NavigationBar></div>
<div><HeaderView/> </div> 
<div><AboutMe></AboutMe></div>
<div></div>
<div></div>
<div></div>

  </div>
</template>

<script>
import NavigationBar from './NavigationBar.vue';
import HeaderView from './HeaderView.vue';
import AboutMe from './AboutMe.vue';
export default {
    name: 'ElectricianComponent',
    components: { NavigationBar, HeaderView, AboutMe }
};
</script>

<style scoped>

.electrician-component {
  text-align: center;
}

</style>

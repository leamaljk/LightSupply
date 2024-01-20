<template>
  <div class="electrician-component">
<div><NavigationBar></NavigationBar></div>
<div><HeaderView/> </div> 
<div><AboutMe></AboutMe></div>
<div><MyServices></MyServices></div>
<div><CostumerTestimonials></CostumerTestimonials> </div>
<div></div>

  </div>

</template>

<script>
import NavigationBar from './NavigationBar.vue';
import HeaderView from './HeaderView.vue';
import AboutMe from './AboutMe.vue';
import MyServices from './MyServices.vue';
import CostumerTestimonials from './CostumerTestimonials.vue';
export default {
    name: 'ElectricianComponent',
    components: { NavigationBar, HeaderView, AboutMe, MyServices, CostumerTestimonials }
};
</script>

<style scoped>

.electrician-component {
  text-align: center;
}

</style>

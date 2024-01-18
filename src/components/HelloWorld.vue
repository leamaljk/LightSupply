<template>
  <div class="electrician-component">
<div><NavigationBar></NavigationBar></div>
<div><HeaderView/>  </div> 
<div></div>
<div></div>
<div></div>
<div></div>

  </div>
</template>

<script>
import NavigationBar from './NavigationBar.vue';
import HeaderView from './HeaderView.vue';
export default {
    name: 'ElectricianComponent',
    components: { NavigationBar, HeaderView }
};
</script>

<style scoped>

.electrician-component {
  text-align: center;
}

</style>

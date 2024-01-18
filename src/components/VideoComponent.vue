<template>
    <div class="video-container">
      <video class="video-style" autoplay loop muted>
        <source src="../assets/tomo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
</template>

<script setup>

</script>

<style scoped>
.video-container {
  border-radius: 15px; 
  max-width: 100%;
  height: 560px;
  margin: auto;
  overflow: hidden; /* Hide anything outside the border-radius */
}

.video-style {
 
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Drop shadow for depth */
  object-fit:contain; /* Ensure the aspect ratio is maintained and the video covers the area */
}
</style>
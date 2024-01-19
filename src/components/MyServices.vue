<template>
    <div><h1 class="title">Services</h1></div>
    <div class="services-section">

        <div class="cards-right">
<!-- CARD 1 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (1).png" alt="icon">
        </div>
        <h2 class="card-title">Our Technical Services</h2>
        <p class="card-description">
          Design service deployment<br>
          Full stack design service deployment
        </p>
      </div>
      <!-- CARD 2 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (2).png" alt="icon">
        </div>
        <h2 class="card-title">Our Technical Services</h2>
        <p class="card-description">
          Design service deployment<br>
          Full stack design service deployment
        </p>
      </div>
      <!-- CARD 3 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (3).png" alt="icon">
        </div>
        <h2 class="card-title">Our Technical Services</h2>
        <p class="card-description">
          Design service deployment<br>
          Full stack design service deployment
        </p>
      </div>
      <!-- CARD 4 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (4).png" alt="icon">
        </div>
        <h2 class="card-title">Our Technical Services</h2>
        <p class="card-description">
          Design service deployment<br>
          Full stack design service deployment
        </p>
      </div>
      <!-- CARD 5 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (6).png" alt="icon">
        </div>
        <h2 class="card-title">Our Technical Services</h2>
        <p class="card-description">
          Design service deployment<br>
          Full stack design service deployment
        </p>
      </div>
      <!-- CARD 6 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (7).png" alt="icon">
        </div>
        <h2 class="card-title">Our Technical Services</h2>
        <p class="card-description">
          Design service deployment<br>
          Full stack design service deployment
        </p>
      </div>
      <!-- CARD 5 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (6).png" alt="icon">
        </div>
        <h2 class="card-title">Our Technical Services</h2>
        <p class="card-description">
          Design service deployment<br>
          Full stack design service deployment
        </p>
      </div>
      <!-- CARD 6 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (7).png" alt="icon">
        </div>
        <h2 class="card-title">Our Technical Services</h2>
        <p class="card-description">
          Design service deployment<br>
          Full stack design service deployment
        </p>
      </div>
      </div>   <!-- cards to right -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesSection'
  };
  </script>
  
  <style scoped>
 .services-section {
    margin: auto;
  display: flex;
  padding: 10px;
  background: rgba(194, 188, 188, 0.5); /* Adds a dark overlay with 50% opacity */
  background-blend-mode: overlay;
  background-image: url('../assets/images/pozadina1.png' ) ;
  background-size: cover;
  background-position: center;
  background-repeat: repeat-y;
  width: 100%;
  height:auto;
  position: relative;
  justify-content: center;
  


}
/* cards styling */
.service-card {

  margin: 10px;
  float: left ;
  width: 300px;
  height: 320px;
  background: white; /* Cards have a solid white background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  position: relative; /* Ensures the card is above the semi-transparent background */
  z-index: 1; /* Higher z-index to ensure the card is above the background layer */
}
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 10px rgba(0, 0, 10, 0.4);
  }

  
  .card-image img{

    /* background: url('/path-to-placeholder-image.png') center/cover no-repeat; */
    height: 100px; /* Adjust based on your actual image aspect ratio */
    margin-bottom: 10px;
  }
  
  .card-title {
    font-size: 1.1em;
    margin-bottom: 15px;
  }
  
  .card-description {
    margin-bottom: 15px;
  }
  
 

  .title{
    font-size: 4em;
  text-align: center;
  width: 100%; /* Make the title take full width */
  margin-bottom: 30px;
  }

  @media (max-width: 768px) {
  .services-section {
    flex-direction: column; /* Stack elements vertically */
    align-items: center; /* Center-align children */
    margin: 0px;
    padding: 10px;
    background-size: contain;
  }
  .service-card {
    width: auto; /* Adjust width as needed */
    margin: 15px auto; /* Center the card with auto margins */
    float: none; /* Remove float */
  }
  .title {
    font-size: 2em;
  }
}

 
  </style>
  
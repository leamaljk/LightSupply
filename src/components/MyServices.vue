<template>
    <div><h1 class="title">Electrical Services</h1></div>
    <div id="services-section">

<!-- CARD 1 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (1).png" alt="icon">
        </div>
        <h2 class="card-title">EICR Landlords Electrical Safety Certificates</h2>
        <p class="card-description">
          I provide Electrical Installation Condition Reports (EICRs) for landlords, ensuring compliance with safety regulations. This includes a thorough inspection of electrical systems, identification of hazards, and a detailed report with photos and notes, delivered within 24 hours.        </p>
      </div>
      <!-- CARD 2 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (7).png" alt="icon">
        </div>
        <h2 class="card-title">New Build Wiring</h2>
        <p class="card-description">
          I specialize in wiring for new constructions, designing and installing complete electrical systems tailored to your needs. This includes planning the layout and installing wiring, sockets, switches, and fixtures for a safe and efficient system.        </p>
      </div>
      <!-- CARD 3 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (2).png" alt="icon">
        </div>
        <h2 class="card-title">EV Charger Installation</h2>
        <p class="card-description">
          I professionally install EV chargers at your home. This service includes assessing the best location, ensuring vehicle compatibility, and delivering a safe installation that meets electrical standards.

</p>
      </div>
      <!-- CARD 4 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (4).png" alt="icon">
        </div>
        <h2 class="card-title">Sockets and Lights Replacement</h2>
        <p class="card-description">
          I replace old or faulty sockets and light fixtures with modern, energy-efficient options, ensuring compatibility with your existing electrical system and safe installation.        </p>
      </div>
      <!-- CARD 5 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (6).png" alt="icon">
        </div>
        <h2 class="card-title">Consumer Unit Replacement</h2>
        <p class="card-description">
          I replace outdated consumer units (fuse boxes) with modern units that offer SPD and RCD protection, enhancing safety and compliance with electrical regulations (BS7671).        </p>
      </div>
      <!-- CARD 6 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (3).png" alt="icon">
        </div>
        <h2 class="card-title">Extended Power to Sheds, Garages, or Garden Cabins</h2>
        <p class="card-description">
          I extend electricity to outdoor structures, safely installing electrical lines to power sheds, garages, and garden cabins for lighting, tools, or entertainment.        </p>
      </div>
      <!-- CARD 7 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (5).png" alt="icon">
        </div>
        <h2 class="card-title">Fixing Electrical Faults</h2>
        <p class="card-description">
          I diagnose and repair various electrical faults, such as flickering lights and tripping circuits, providing prompt solutions to ensure your system operates safely.        </p>
      </div>
      <!-- CARD 8 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon.png" alt="icon">
        </div>
        <h2 class="card-title">Full House Rewire</h2>
        <p class="card-description">
          I offer full house rewiring, replacing old wiring with modern cables, and updating sockets, switches, and fixtures to enhance the safety and functionality of your electrical system.        </p>
       
      </div>
    </div>
  </template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      // Create an array with the same length as the number of cards
      // Initialize all to false indicating that all cards are not expanded
      expanded: [false, false, false, false, false, false, false, false]
    };
  },
  methods: {
    toggleExpand(index) {
      // Toggle the expanded state of the card at the given index
      this.expanded[index] = !this.expanded[index];
    }
  }
};
</script>

<style scoped>
#services-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Four columns */
  gap: 10px; /* Space between cards */
  padding: 10px;
  background: rgba(194, 188, 188, 0.5);
  background-blend-mode: overlay;
  background-image: url('../assets/images/pozadina1.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat-y;
  width: 100%; /* Ensure the grid takes the full width */
  justify-content: start; /* Align grid items to the start of the grid area */
  align-content: start; /* Align grid content to the start of the grid container */
}

.service-card {
    margin: 10%;
  overflow: hidden;
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute space inside the card */
  height: auto; /* Make cards of equal height */
  border-left: 8px solid var(--secondary);
  border-bottom: 6px solid var(--secondary);

}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.card-image img {
  height: 120px;
  margin-bottom: 10px;
  align-self: center; /* Center image in the flex container */
}

.card-title {
  font-size: 1.2em;
  margin-bottom: 15px;
  text-align: center; /* Center the title */
}

.card-description {
  
  font-size: 24px;
  text-align: center;
  flex-grow: 1; /* Allow the description to fill the space */
}




.title {
  font-size: 4em;
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
}

@media (max-width: 1199px) {
  #services-section {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); /* Adjust to fewer columns on medium screens */
  }
}


@media (max-width: 768px) {
    #services-section {
    grid-template-columns: 1fr; /* Stack cards in a single column on small screens */
  }
  .service-card {
    width: 90%; /* Adjust card width on small screens */
    margin: 15px auto; /* Center the card with auto margins */
  }
  .card-description {
  
  font-size: 20px;
  }
  .title {
    font-size: 2em;
  }
}
</style>

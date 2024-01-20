<template>
    <div><h1 class="title">Services</h1></div>
    <div id="services-section">

<!-- CARD 1 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (1).png" alt="icon">
        </div>
        <h2 class="card-title">EICR Landlords Electrical Safety Certificates</h2>
        <p class="card-description">
            I provide comprehensive Electrical Installation Condition Reports (EICR-Safety Report) for landlords, ensuring compliance with legal safety obligations. This service includes a thorough inspection of the property’s electrical systems, identifying any potential hazards or deficiencies, and issuing a detailed report and certification in PDF format with all photos and notes within 24h.
        </p>
      </div>
      <!-- CARD 2 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (7).png" alt="icon">
        </div>
        <h2 class="card-title">New Build Wiring</h2>
        <p class="card-description">
            Specializing in wiring services for new constructions, I design and install complete electrical systems tailored to the specific needs of your new build. This includes strategic planning of the electrical layout, installation of all wiring, sockets, switches, and essential fixtures, ensuring that your new property is equipped with a safe and efficient electrical system from the start.
        </p>
      </div>
      <!-- CARD 3 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (2).png" alt="icon">
        </div>
        <h2 class="card-title">EV Charger Installation</h2>
        <p class="card-description">
            With the rise of electric vehicles, I offer professional installation of EV chargers at your home. Our service includes assessing the best location for the charger, ensuring compatibility with your vehicle, and providing a seamless and safe installation that complies with all electrical standards.
        </p>
      </div>
      <!-- CARD 4 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (4).png" alt="icon">
        </div>
        <h2 class="card-title">Sockets and Lights Replacement</h2>
        <p class="card-description">
        I offer replacement services for old or faulty sockets and light fixtures. This includes upgrading to more aesthetically pleasing or energy-efficient options, ensuring that all replacements are compatible with your existing electrical system and are installed with precision and safety.
        </p>
      </div>
      <!-- CARD 5 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (6).png" alt="icon">
        </div>
        <h2 class="card-title">Consumer Unit Replacement</h2>
        <p class="card-description">
            I replace outdated or malfunctioning consumer units (fuse boxes) with modern, safer units that include RCD protection. This service enhances the safety of your home by preventing electrical overloads and short circuits, and ensures compliance with current electrical regulations.
        </p>
      </div>
      <!-- CARD 6 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (3).png" alt="icon">
        </div>
        <h2 class="card-title">Extended Power to Sheds, Garages, or Garden Cabins</h2>
        <p class="card-description">
            Extend the convenience of electricity to your outdoor structures with my service. I safely install electrical lines to power sheds, garages, garden cabins, or any other outdoor spaces, providing you with the flexibility to use these areas for a variety of purposes, whether it’s for lighting, power tools, or entertainment.
        </p>
      </div>
      <!-- CARD 7 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon (5).png" alt="icon">
        </div>
        <h2 class="card-title">Fixing Electrical Faults</h2>
        <p class="card-description">
            As a skilled electrician I adept at diagnosing and repairing all types of electrical faults. Whether it’s flickering lights, tripping circuits, or malfunctioning outlets, I provide prompt and effective solutions to resolve these issues, ensuring your electrical system operates smoothly and safely.
        </p>
      </div>
      <!-- CARD 8 -->
      <div class="service-card">
        <div class="card-image">
        <img src="../assets/images/icon.png" alt="icon">
        </div>
        <h2 class="card-title">Full House Rewire</h2>
        <p class="card-description">
            Full house rewire service involves replacing old and potentially hazardous wiring throughout your home. This comprehensive service includes the removal of outdated wiring, installation of new cables, and updating sockets, switches, and fixtures to modern standards, significantly improving the safety and functionality of your home's electrical system.
        </p>
       
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
  gap: 20px; /* Space between cards */
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
  font-size: 1.1em;
  margin-bottom: 15px;
  text-align: center; /* Center the title */
}

.card-description {
  font-size: 0.8em;
  text-align: justify;
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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Adjust to fewer columns on medium screens */
  }
}


@media (max-width: 768px) {
    #services-section {
    grid-template-columns: 1fr; /* Stack cards in a single column on small screens */
  }
  .service-card {
    width: 80%; /* Adjust card width on small screens */
    margin: 15px auto; /* Center the card with auto margins */
  }
  .title {
    font-size: 2em;
  }
}
</style>

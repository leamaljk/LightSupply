<template>
    <div >
        <nav class="navbar">
            <div class="nav-logo">
            <h1 class="logo-signL"> LIGHT </h1>
            <h1 class="logo-signS"> SUPPLY </h1>
            </div>
                <ul class="nav-links">
                <li><a href="#header" class="nav-item"><font-awesome-icon :icon="['fas', 'house']" class="my-icon-style" />HOME</a></li>
                <li><a href="#about-me-container" class="nav-item"><font-awesome-icon :icon="['fas', 'circle-user']" class="my-icon-style"/>ABOUT</a></li>
                <li><a href="#services-section" class="nav-item"><font-awesome-icon :icon="['fas', 'circle-check']" class="my-icon-style" />SERVICES</a></li>
                <li><a href="#testimonials" class="nav-item"><font-awesome-icon :icon="['fas', 'comment']" class="my-icon-style" />TESTIMONIALS</a></li>
                <li><a href="#main-div" class="nav-item"><font-awesome-icon :icon="['fas', 'circle-question']" class="my-icon-style"/>FAQ</a></li>
                <li><a href="#main-div" class="nav-item"><font-awesome-icon :icon="['fas', 'images']"  class="my-icon-style"/>GALLERY</a></li>
                <li><a href="#footer" class="nav-item"><font-awesome-icon :icon="['fas', 'envelope-circle-check']" class="my-icon-style" />CONTACT</a></li>
                
                <!-- Add more navigation items here -->
                </ul>
                
        </nav>
        <div>
        <img class="nav-wave" src="../assets/images/wave (1).png" alt="nav">
        </div>
        <div class="mobile-navbar">
    <!-- Navigation icons -->
    <a href="#header" class="nav-icon">
      <font-awesome-icon :icon="['fas', 'house']" />
    </a>
    <a href="#about-me-container" class="nav-icon">
      <font-awesome-icon :icon="['fas', 'circle-user']" />
    </a>
    <a href="#services" class="nav-icon">
      <font-awesome-icon :icon="['fas', 'circle-check']" />
    </a>
    <a href="#testimonials" class="nav-icon">
      <font-awesome-icon :icon="['fas', 'comment']" />
    </a>
    <a href="#main-div" class="nav-icon">
      <font-awesome-icon :icon="['fas', 'circle-question']" />
    </a>
    <a href="#main-div" class="nav-icon">
      <font-awesome-icon :icon="['fas', 'images']">
      </font-awesome-icon>    </a>
    <a href="#footer" class="nav-icon">
      <font-awesome-icon :icon="['fas', 'envelope-circle-check']" />    
    </a>
  </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.my-icon-style {
  color: var(--secondary);
  font-size: 1.4em;
  padding-right: 10px;
}

// logo
.nav-logo{
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: row;
}

.logo-signL{
  color: var(--text-color-light);
  margin-right: 10px;
  font-size: 2.2rem;
  font-weight: 200;

}
.logo-signS{
  color: var(--secondary);
  font-size: 2.2rem;
  font-weight: 700;
}



/* NAVIGATION */
.navbar {
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-color);
  padding-top: 20px;
  margin: auto; /* Center the navbar */
  color: var(--text-color-light);
  width: 100%; /* Span the full width */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; /* Ensure it's above the wave image */
  height: 60px; /* Example height - adjust as needed */
  overflow: hidden;
}

.nav-wave {
  display: block; /* Display the image as a block */
  width: 100%; /* Full width to span across the page */
  height: auto; /* Maintain the aspect ratio of the image */
  position: absolute; /* Absolute position if it's to be directly below the navbar */
  top: 60px; /* This should be the height of your navbar */
  left: 0;
  z-index: 9; /* Below the navbar */
}

.nav-logo{
  margin: 40px;
  
}

.nav-logo img {
  height: 60px; /* Adjust based on your actual logo size */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 10px;
}

.nav-item {
  text-decoration: none;
  color: var(--text-color-light) ;
  font-family: 'Montserrat', sans-serif;
  padding: 3rem 1rem;

  transition: color 0.3s ease;
}

.nav-item:hover {
  
  color: #FC9C71; /* Your accent color */
}
.mobile-navbar {
display: none;
}

@media (max-width: 768px) {
  .navbar, .nav-wave{
    display: none;
  }
  .mobile-navbar {
  position: fixed; /* Fix navbar to the bottom */
  bottom: 0;
  left: 0;
  right: 0;
  display: flex; /* Use flexbox for layout */
  justify-content: space-around; /* Space icons evenly */
  align-items: center; /* Center icons vertically */
  background-color: var(--bg-color); /* Set background color */
  padding: 10px 0; /* Add padding */
  z-index: 1000; /* High z-index to ensure it's above other content */

  border-top: 1px solid var(--secondary);
}

.nav-icon {
 
  color: var(--text-color-light); /* Icon color */
  font-size: 20px; /* Icon size */
  display: block; /* Ensure it's a block element */
}

/* You might want to add :hover and :active states for your icons */
.nav-icon:hover {
  color: var(--primary);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  animation: bounce 0.2s ease-in; /* Apply the bounce animation */
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0); /* Start and end with no vertical movement */
  }
  40% {
    transform: translateY(-10px); /* Bounce up 10px at 40% */
  }
  60% {
    transform: translateY(-5px); /* Bounce up 5px at 60% */
  }
}
.nav-logo{
  position: absolute;
  top: 0;
}
}



</style>
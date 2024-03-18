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
                <li><a href="#services-section" class="nav-item"><font-awesome-icon :icon="['fas', 'gear']" class="my-icon-style" />SERVICES</a></li>
                <li><a href="#testimonials" class="nav-item"><font-awesome-icon :icon="['fas', 'star']"  class="my-icon-style" />TESTIMONIALS</a></li>
                <li><a href="#main-div" class="nav-item"><font-awesome-icon :icon="['fas', 'circle-question']" class="my-icon-style"/>FAQ</a></li>
                <li><a href="#container" class="nav-item"><font-awesome-icon :icon="['fas', 'phone']"  class="my-icon-style" />CONTACT</a></li>
                
                <!-- Add more navigation items here -->
                </ul>
                
        </nav>
        <div>
        <img class="nav-wave" src="../assets/images/wave (1).png" alt="nav">
        </div>
        <div class="mobile-navbar">
    <!-- Navigation icons -->
    <a href="#header" class="nav-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg>      <p class="small-nav-text">Home</p>
    </a>
    <a href="#about-me-container" class="nav-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>      <p class="small-nav-text">About</p>
    </a>
    <a href="#services-section" class="nav-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg>      <p class="small-nav-text">Services</p>
    </a>
    <a href="#testimonials" class="nav-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>      <p class="small-nav-text">Reviews</p>
    </a>
    <a href="#main-div" class="nav-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
</svg>      <p class="small-nav-text">FAQ</p>
    </a>
    
    <a href="#footer" class="nav-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>      <p class="small-nav-text">Contact</p>
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

.nav-item {
    font-size: clamp(0.7rem, 2vw, 1rem); /* Adjust values as needed */
  }

  @media (min-width: 767px) and (max-width: 1400px) { //tablet 
  .nav-links {
    display: none;
  }
  .mobile-navbar {
  height: auto;
  position:fixed; /* Fix navbar to the bottom */
  top: 0;
  right: 0; 
  display: flex; /* Use flexbox for layout */
  justify-content: space-around; /* Space icons evenly */
  align-items: center; /* Center icons vertically */
  background-color: var(--bg-color); /* Set background color */
  padding: 0px 0; /* Add padding */
  z-index: 1000;
  width: 55%;
  }

  .nav-wave {
    display: none;
  }

  .navbar{
    position:fixed; /* Fix navbar to the bottom */
  top: 0;
  padding-bottom: 20px;
  }
  .nav-icon {
    padding-top: 20px;
  color: var(--primary); /* Icon color */
  font-size: 22px; /* Icon size */
  display: block; /* Ensure it's a block element */

}

/* You might want to add :hover and :active states for your icons */
.nav-icon:hover {
  color: var(--border);
  animation: bounce 0.1s ease;
  border-top: 4px solid var(--border);
}

a{
  text-decoration: none;
}


.small-nav-text{
display: none;

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

}

@media (max-width: 767px) {
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
  padding: 0px 0; /* Add padding */
  z-index: 1000; /* High z-index to ensure it's above other content */
}

.nav-icon {
  color: var(--text-color-light); /* Icon color */
  font-size: 22px; /* Icon size */
  display: block; /* Ensure it's a block element */
  padding: 10px;
}

/* You might want to add :hover and :active states for your icons */
.nav-icon:hover {
  color: var(--border);
  border-top: #FC9C71 4px solid;



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

a{
  text-decoration: none;
}
.small-nav-text{
  text-decoration: none;
  font-size: 11px;
  color: var(--primary);
}


}



</style>
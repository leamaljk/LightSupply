<template>
   <div class="nav-logo">
            <h1 class="logo-signL"> LIGHT </h1>
            <h1 class="logo-signS"> SUPPLY </h1>
            </div>
    <div id="header">
      
      <div class="image-container">
        <div class="header">
          <div class="one-line"> 
            <h1 class="local-electrician">Your Local <span class="span">Electrician</span></h1> 
             
          </div>
          <h2 class="local-electrician">Here When You Need Me</h2>
          <a href="#footer">
          <button class="book-now">Book Now</button>
        </a>
        </div>
      </div>
      <div class="middle-div">
       <img src="../assets/tomo1.jpg" alt="Light Supply working">
      </div>
      <div class="window"> 
        <p>
          Light Supply Electrical Services, <br>
          is a small business based in Milton Keynes and NICEIC Approved Domestic Installer.<br>
          As qualified electrician I offer professional electrical services to domestic properties for homeowners and landlords.<br>
        </p>
    </div>
    </div>
  </template>
  
  <script setup>
  // Script setup area for Vue component logic
  </script>
  
  <style lang="scss" scoped>

  .span{
    color: var(--secondary);
  }
  #header {
    width: 96%;    
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: cover;
    background-position: center ;
    height: 160px;
    justify-content: center;
    align-items: center;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    margin-top: 20rem;
    background-color: var(--bg-color);
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
  }

  #header > div {
  animation: float 3s ease-in-out infinite, floatShadow 3s ease-in-out infinite;    box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  border: 2.5px solid var(--secondary);
  border-radius: 50%; /* This makes the divs into circles */
  aspect-ratio: 1 / 1; /* This ensures that the width and height are always equal */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
  font-size: 1rem; /* Base size */
  font-size: 1.5vw; /* Scale with the viewport */
  min-font-size: 12px; /* Minimum size */
  max-font-size: 24px; /* Maximum size */
}


/* Additional styles to ensure the content inside the circles is properly aligned and formatted */
#header > div > * {
  text-align: center;
  margin: auto;
    background-size: cover;
    
}

@keyframes floatShadow {
  0%, 100% {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 15px 40px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1);
  }
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
  
  .middle-div img {
    object-fit: cover;  
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  
  .middle-div{
    object-fit: cover;  
    background-size: cover;
}
  .image-container,
  .middle-div,
  .window {
    position: relative;
  }
  
  .header {
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--primary);
    text-align: center;
  }
  
  .header .local-electrician {
    color: var(--primary);
  }
  
  .book-now {
    background-color: var(--secondary);
    color: white;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 20px;
  }

  .book-now:hover{
    transform: scale(1.1);
  }
  
  .local-electrician {
    margin-right: 10px;
  }
  
  .logo-signS {
    color: var(--secondary);
  }
  
  .one-line {
    display: flex;
    flex-direction: row;
  }
  
  .window {
    background: rgba(255, 255, 255, 0.5); 
    color: var(--text-color); 
    padding: 1rem;
    font-size: 1em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    z-index: 10;
    font-weight: 500;
    
  }
  .window p{
width: 90%;
  }

  .nav-logo{
  display: none;
  }


  @media (min-width: 767px) and (max-width: 1400px) { //tablet 
#header{
  margin-top: 10rem;

}

  }

  @media (max-width: 767px) {

    #header > div  {
  width: 70%;
  border-radius: 50%; /* This makes the divs into circles */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
  margin: auto;
  font-size: 2.5vw; /* Scale with the viewport */
  min-font-size: 12px; /* Minimum size */
  max-font-size: 24px; /* Maximum size */
  animation: none;    box-shadow: none;

    }

#header > div:hover{
  transform: scale(1.2);

}
    @keyframes moveUp {
  0% {
    position: relative;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 100%);
    opacity: 0;
  }
  100% {
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, -20%);
    opacity: 1;
  }
}
  .nav-logo {
      left: 50%; /* Center horizontally */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Roboto', sans-serif;
      animation: moveUp 3s ease forwards; 
      animation-delay: 0.5s; /* Delay the start of the animation */
      z-index: 1000;
    }

     .logo-signL, .logo-signS {
    /* Ensure these are not hidden by overflow or other elements */
    display: block; /* Or inline-block, as necessary */
    width: 100%; /* Adjust as necessary */
    text-align: center; /* Center text */
    /* Make sure no parent element is hiding overflow content */
    overflow: visible;
  }

    .logo-signL{
  color: var(--text-color);
  font-size: 2.2rem;
  font-weight: 200;

}
.logo-signS{
  color: var(--secondary);
  font-size: 2.2rem;
  font-weight: 700;
}


    #header {
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      grid-template-columns: 1fr;
      height: auto;
      padding: 20px;
      margin-top: 0; /* Reset the margin-top */
      opacity: 0; /* Start hidden and fade in */
      animation: fadeIn 2s ease forwards; /* Fade in animation for content */
      
      animation-delay: 1.5s;/* Start after navbar animation */
    }

    .image-container,
    .middle-div,
    .window {
      width: calc(100% - 40px); /* Adjust width with padding */
      margin: 0 auto;
    }

    .header {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 0.9em;
    }

    .one-line {
      flex-direction: column;
    }

    .local-electrician, .logo-signS {
      width: 100%;
      margin: 0 0 10px 0;
      padding: 0 10px;
    }

    .book-now {
      width: 100px;
      margin-top: 20px;
      border-radius: 20px;
    }

    .window {
      width: 100%;
      margin: 20px 0;
      padding: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    /* Keyframes for fading in */
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }

@media (max-width: 480px) {
  #header {
    height: auto;
    justify-content: center;
    align-items: center;
    margin: auto;
   
  }

  .one-line h1 {
    font-size: 1.5em;
  }

  .book-now {
    font-size: 0.8em;
    padding: 8px 20px;
  }

  .window {
    
    font-size: 0.8em;
    padding: 0px;
    margin: auto; /* This will center the window, but you might want to specify the margin if you want more space */
    width: calc(100% - 20px); /* Subtract the total horizontal padding from the width */
  }

  .middle-div img{
    object-fit: cover;  
    background-size: cover;
    width: 100%;
    height: 100%;
    
  }
}

  </style>
  
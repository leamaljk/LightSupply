<template>
    <footer id="footer">
        
      <div class="footer-container">
        <div class="social-media-links">
            
            <h2 class="social-media ">Check out my profiles: </h2>
          <a href="https://www.myjobquote.co.uk/t/light-supply-electrical-services" target="_blank" aria-label="linkedin"><img src="../assets/images/badge.png " alt="mybuilderbage" height="60px" width="60px"></a>
          <a href="https://www.mybuilder.com/profile/view/light_supply/feedback" target="_blank" aria-label="linkedin"><img src="../assets/images/badge (2).png " alt="mybuilderbage" height="60px" width="60px"></a>
        </div>
        <div class="footer-links">
            <h2 class="social">Contact</h2>
          <a href="mailto:lea.zizic@hotmail.com" target="_blank" aria-label="e-mail"><font-awesome-icon :icon="['fas', 'envelope']" style="height: 35px; width: 35px;"/>
            <h4 class="contact">lightsupply2007@gmail.com</h4>
          </a>
          <a href="#" target="_blank" aria-label="phone"><font-awesome-icon :icon="['fas', 'phone']" style="height: 35px; width: 35px;" />
            <h4 class="contact"> +447417450837</h4>
          </a>    
        
        </div>
        <div class="legal-links">
            <a href="https://g.co/kgs/w9Cwgi" target="_blank" aria-label="location"><font-awesome-icon :icon="['fass', 'location-pin']" bounce class="pin" style="height: 35px; width: 35px;" />
            <h4 class="contact"> I am currently based <br><br>in Milton Keynes, UK.</h4>
          </a> 
        </div>
        <div class="copyright">
          © 2023 Lea Maljkovic.<br><br> All Rights Reserved.
        </div>
        
      </div>
      
    </footer>
  </template>
  


  <script>
  export default {
    name: 'FooterComponent'
  }
  </script>
  
  <style scoped>
  #footer {
    margin-top: 40px;
    font-family: 'Tenor Sans', sans-serif;
    background-color: var(--bg-color); /* Replace with the color code you want */
    color: white; /* Replace with the color code for the text */
    font-size: 0.8rem; /* Adjust font-size as needed */
    padding: 60px 20px;
  }
  .nav-wave {
  display: block; /* Display the image as a block */
  width: 100%; /* Full width to span across the page */
  height: auto; /* Maintain the aspect ratio of the image */
  position: absolute; /* Absolute position if it's to be directly below the navbar */
  bottom: 60px; /* This should be the height of your navbar */
  left: 0;
  z-index: 9; /* Below the navbar */
}
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .pin{
    position: relative;
    top: 20px;
  }
  .copyright{
    padding: 20px;
    font-size: 1em;
    font-weight: 200;
  }
  .contact{
    padding: 10px;
    position: relative;
    bottom: 6px;
    font-size: 1.1em;
    
  }

  .social{
    position: relative;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }
  .social-media{
    position: relative;
    bottom: 34px;
    justify-content: center;
    text-align: center;
    padding-top: 10px;
  }
  .social-media-links a {
    padding-left: 10px;
    margin-right: 10px; /* Adjust spacing as needed */
    color: inherit; /* Inherits the color from the footer */
    text-decoration: none;
  }
  
  .footer-links a,
  .legal-links a {
    display: flex;
    margin-right: 10px; /* Adjust spacing as needed */
    color: inherit; /* Inherits the color from the footer */
    text-decoration: none;
  }
  
  /* Icons from Font Awesome - you will need to include the Font Awesome library */
  .fab {
    font-size: 1.5em; /* Adjust icon size as needed */
  }
  
  @media (max-width: 600px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
    }
    .social-media-links a, .footer-links a, .legal-links a {
      margin-bottom: 10px;
    }
  }
  </style>
  
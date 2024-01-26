<template>
    <footer id="footer">
        
      <div class="footer-container">
        <div class="social-media-links">
            
            <h2 class="social-media ">Check out my profiles: </h2>
          <a href="https://www.myjobquote.co.uk/t/light-supply-electrical-services" target="_blank" aria-label="linkedin"><img src="../assets/images/badge.png " alt="mybuilderbage" height="60px" width="60px"></a>
          <a href="https://www.mybuilder.com/profile/view/light_supply/feedback" target="_blank" aria-label="linkedin"><img src="../assets/images/badge (2).png " alt="mybuilderbage" height="60px" width="60px"></a>
          <a href="https://www.competentperson.co.uk/" target="_blank" aria-label="competent person"><img src="../assets/images/logo4 (2).png " alt="mybuilderbage" height="70px" width="110px"></a>
          <a href="https://www.competentperson.co.uk/" target="_blank" aria-label="NICEIC domestic installer"><img src="../assets/images/logo3.png " alt="mybuilderbage" height="60px" width="100px"></a>

        </div>
        <div class="footer-links">
            <h2 class="social">Contact Me</h2>
            <a href="https://g.co/kgs/GyFZDvo" target="_blank" aria-label="location" ><font-awesome-icon :icon="['fass', 'location-pin']" bounce class="pin icon" style="height: 30px; width: 30px;" />
            <h4 class="contact"> I am currently based <br><br>in Milton Keynes, UK.</h4>
          </a> 
          <a href="mailto:lea.zizic@hotmail.com" target="_blank" aria-label="e-mail" ><font-awesome-icon :icon="['fas', 'envelope']" style="height: 30px; width: 30px;" class="icon"/>
            <h4 class="contact">lightsupply2007@gmail.com</h4>
          </a>
          <a href="#" target="_blank" aria-label="phone" ><font-awesome-icon :icon="['fas', 'phone']" style="height: 30px; width: 30px;" class="icon" />
            <h4 class="contact"> +447417450837</h4>
          </a>    
        
        </div>
        <div class="legal-links">
            <h2 class="social">Opening hours / Emergency</h2>

            Business Hours: Every day<br> from <span>8am</span> to <span>5pm</span> except Sunday.<br><br> 
            Emergency Calls: Contact me <span>anytime.</span>
  
        </div>
        <div class="copyright">
            <br><br>   © 2024 Designed by Lea Maljkovic.<br><br> All Rights Reserved.
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
    padding: 60px 20px;
    border-top: 6px solid var(--secondary);
  }
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items:top;
    flex-wrap: wrap;
  }
  
  .pin{
    position: relative;
    top: 10px;
  }
  .copyright{
    padding: 20px 0;
    
    font-weight: 200;
  }
  .contact{
    padding: 10px;
    position: relative;
    bottom: 6px;
    
    font-weight: 100;
    text-align: left;
    
  }

 .social-media , .social{
    position: relative;
    justify-content: center;
    text-align: left;
    padding: 20px 0;
    color: var(--secondary);
  }
  .social-media{
    
    justify-content: center;
   
    
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

  .legal-links{
    text-align: left;
    font-size: 20px;
    padding: 20px 0;
  }
.icon{
   color: var(--secondary);
}

.footer-links .contact {
  margin-left: 8px; /* Adjust as necessary for spacing */
}
  
  /* Icons from Font Awesome - you will need to include the Font Awesome library */
  .fab {
    font-size: 1.5em; /* Adjust icon size as needed */
  }

  span{
    color: var(--secondary);
    font-weight: 600;
    margin: 0 2px;
  }
  
  @media (max-width: 600px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
    }
    .social-media-links a, .footer-links a, .legal-links a {
      margin-bottom: 10px;
    }
    
 .social-media , .social{
text-align: center;
 }

 .social h4{
    text-align: center;
    align-items: center;
 }
 .social-media{
    padding: 0;
 }
    .legal-links{
    text-align: center;
    font-size: 14px;
  }
  }
  </style>
  
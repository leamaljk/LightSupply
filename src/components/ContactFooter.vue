<template>
    <footer id="footer">
        
      <div class="footer-container">
        <div class="social-media-links">
            
            <h2 class="social-media ">Visit my profiles or check: </h2>
          <a href="https://www.myjobquote.co.uk/t/light-supply-electrical-services" target="_blank" aria-label="linkedin"><img src="../assets/images/badge.png " alt="mybuilderbage" height="60px" width="60px"></a>
          <a href="https://www.mybuilder.com/profile/view/light_supply/feedback" target="_blank" aria-label="linkedin"><img src="../assets/images/badge (2).png " alt="mybuilderbage" height="60px" width="60px"></a>
          <a href="https://www.competentperson.co.uk/" target="_blank" aria-label="competent person"><img src="../assets/images/logo4 (2).png " alt="mybuilderbage" height="70px" width="110px"></a>
          <a href="https://www.competentperson.co.uk/" target="_blank" aria-label="NICEIC domestic installer"><img src="../assets/images/logo3.png " alt="mybuilderbage" height="60px" width="100px"></a>

        </div>
        <div class="footer-links">
            <h2 class="social">Light Supply</h2>
            <a href="https://g.co/kgs/GyFZDvo" target="_blank" aria-label="location" ><font-awesome-icon :icon="['fass', 'location-pin']" bounce class="pin icon" style="height: 30px; width: 30px;" />
            <h4 class="contact description"> Light Supply Electric provides professional and reliable electrical services including domestic installations, repairs, and maintenance in Milton Keynes, Luton, London, Oxford, Reading, Cambridge, Northampton, UK.</h4>
          </a> 
          <a href="mailto:lea.zizic@hotmail.com" target="_blank" aria-label="e-mail" ><font-awesome-icon :icon="['fas', 'envelope']" style="height: 30px; width: 30px;" class="icon"/>
            <h4 class="contact">lightsupply2007@gmail.com</h4>
          </a>
          <a href="#" target="_blank" aria-label="phone" ><font-awesome-icon :icon="['fas', 'phone']" style="height: 30px; width: 30px;" class="icon" />
            <h4 class="contact"> +447417450837</h4>
          </a>    
        
        </div>
        <div class="legal-links">
            <h2 class="social"> Opening hours / Emergency</h2>

            Business Hours: Every day<br> from <span>8am</span> to <span>5pm</span> except Sunday.<br><br> 
            Emergency Calls: Contact me <span>anytime.</span>
  
        </div>
        <div class="copyright">
            <br> © 2024 Designed by Pearl Design.<br><br> All Rights Reserved. <br><br>
            For website design services visit 
            <br><br>
            <a href="#https://pearldesign2024.com">
              <img class="logo-sign" src="../assets/images/LogoSign (2).png" alt="logo" width="20px" height="20px" >

              Pearl Design
            </a>
            <br><br>
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
    font-family: 'Montserrat', sans-serif;    
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
.description{
  width: 300px;
}
  .pin{
    position: relative;
    top: 10px;
  }
  .copyright{
    padding: 20px 0;
    
    font-weight: 200;
  }

  .copyright a{
    text-decoration: none;
    color: white;
    font-family: "Libre Caslon Text", serif;
  font-weight: 700;
  font-style: normal;
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
margin: 15px 0;
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
  
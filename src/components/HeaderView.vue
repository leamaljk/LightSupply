<template>
    <div id="header">
      <div class="image-container">
        <div class="header">
          <div class="one-line"> 
            <h1 class="local-electrician">Your Local</h1> 
            <h1 class="logo-signS">Electrician</h1> 
          </div>
          <h2 class="local-electrician">Here When You Need Me</h2>
          <button class="book-now">Book Now</button>
        </div>
      </div>
      <div class="middle-div">
       <img src="../assets/tomo1.jpg" alt="Light Supply working">
      </div>
      <div class="window"> 
        <p>
        I am certified and experienced electrician dedicated to providing top-notch electrical services in my region. <br><br>
        My approach combines technical expertise with a commitment to customer satisfaction, ensuring every project is completed to the highest standards.
        </p>
    </div>
    </div>
  </template>
  
  <script setup>
  // Script setup area for Vue component logic
  </script>
  
  <style lang="scss" scoped>
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
}


/* Additional styles to ensure the content inside the circles is properly aligned and formatted */
#header > div > * {
  text-align: center;
  margin: auto;
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
    object-fit: contain;
    height: 600px;
    width: 100%;
  }
  
  .middle-div{
    // background-image: url('../assets/img\ \(36\).JPG' );
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
    background-color: var(--text-color-light);
    border: 2px solid var(--bg-color);
    cursor: pointer;
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
 @media (max-width: 768px) {
  #header {
    position: relative;
    top: 0;
    left: 0; /* Add this to align the header to the left edge */
    right: 0; /* Add this to align the header to the right edge */
    grid-template-columns: 1fr;
    height: auto;
    padding: 20px;
    
  }

  .image-container,
  .middle-div,
  .window {
    width: calc(100% - 40px); /* Subtract the total horizontal padding from the width */
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

  .local-electrician,
  .logo-signS {
    width: 100%;
    margin: 0 0 10px 0;
  }

  .book-now {
    width: 100px;
    margin-top: 20px;
  }

  .window {
    max-width: 100%;
    margin: 20px 0;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    
  }
}

@media (max-width: 480px) {
  #header {
    height: auto;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 60px;
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
  
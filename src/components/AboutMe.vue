<template>
    <div id="about-me-container">
      <h1 class="title1">About Me</h1>
    <!-- CARD 1 -->
      <div class="box left-border">
        <p class="text-box1">
            Welcome to Light Supply Electrical Services! <br><br>
            With number of years of experience, I specialize in high-quality domestic electrical installations and repairs.<br>
            I am dedicated to provide the safest and most reliable electrical solutions. <br>
            I use the latest tools and techniques and adhere to the strictest safety protocols. <br>
            With continual updates and my training to stay ahead of industry standards,<br> Light Supply is ensuring your home's electrical system is both safe and efficient.

        </p> 
    </div>

    <!-- CARD 2 -->
      <div class="box right-border">
    
        <h2 class="inside-title">My Work Process</h2>
    <!-- 1 -->
        <h3 class="subtitle">
            Consultation
        </h3>
        <p class="text-box2">
            I start with a thorough consultation to understand your needs and assess the electrical setup.
        </p> 
    <!-- 2 -->
        <h3 class="subtitle">
            Planning and Quotation
        </h3>
        <p class="text-box2">
            I provide a detailed plan and a transparent quote, ensuring you understand all aspects of the job.
        </p> 
    <!-- 3 -->
        <h3 class="subtitle">
            Final Inspection and Testing
        </h3>
        <p class="text-box2">
            I conduct a comprehensive inspection and testing if required to ensure everything is in perfect working order.
        </p> 
    <!-- 4  -->
        <h3 class="subtitle">
            Customer Approval and Follow-Up
        </h3>
        <p class="text-box2">
            Your satisfaction is my goal. I ensure you're completely happy with the work and provide follow-up support.
        </p> 
      </div>


      <!-- CARD 3 -->
      <div class="box left-border">
        <h2 class="inside-title3">Why Choose Me?</h2>
        <!-- 1 -->
        <h3 class="subtitle2">
            Experience and Expertise
        </h3>
        <p class="text-box3">
            With over nuber of years in the industry, I have the knowledge to handle any electrical challenge.        
        </p> 
    <!-- 2 -->
        <h3 class="subtitle2">
            Quality Assurance
        </h3>
        <p class="text-box3">
            I use only the best materials, ensuring long-lasting and reliable electrical installations.
        </p> 
    <!-- 3 -->
        <h3 class="subtitle2">
            Transparent Pricing
        </h3>
        <p class="text-box3">
            No hidden fees or surprises. I provide clear, upfront pricing on all my services.        
        </p> 
    <!-- 4  -->
        <h3 class="subtitle2">
            Timely and Efficient
        </h3>
        <p class="text-box3">
            I respect your time and complete my work as quickly and efficiently as possible, without compromising on quality.        
        </p>  
    </div>
    </div>
  </template>
  
  <script>
export default {
  mounted() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // When element's is in viewport, add class to trigger animation
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
          observer.unobserve(entry.target); // Stop observing the current target
        }
      });
    }, { threshold: 0.1 }); // Trigger when at least 10% of the target is visible

    // Observe all the elements you want to animate
    document.querySelectorAll('.box, .title1').forEach((el) => {
      observer.observe(el);
    });
  }
};
  </script>
  
  <style scoped>

 #about-me-container {
  max-width: 1200px;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* align-items: center; Remove this line to allow default alignment (stretch) */
}

.title1 {
  font-size: 4em;
  text-align: left;
  width: 100%; /* Make the title take full width */
  margin-bottom: 30px;
}
.inside-title, .inside-title3{
    padding-bottom: 20px;
}

  .text-box1, .text-box3, .inside-title3{
    text-align: left;
    margin: 10px;
  }

  .text-box2, .inside-title{
    text-align: right;
    margin: 10px;
  }

  .subtitle{
    text-align: right;
    color: var(--secondary);
  }
  .subtitle2{
    text-align: left;
    color: var(--secondary);
  }
  
  
  .box {
    font-size: large;
    width: 100%; /* Boxes take full width */
    padding: 20px;
    margin-bottom: 10px; /* Space between boxes */
  }
  
  .left-border {
    border-left: 7px solid var(--bg-color); /* Adjust color and size as needed */
  }
  
  .right-border {
    border-right: 7px solid var(--secondary); /* Adjust color and size as needed */
  }

/* ANIMATION */
@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.fadeIn {
  animation-name: fadeInUp;
  animation-duration: 2s; /* Control the speed of the fade-in */
  animation-fill-mode: both; /* Stay at the final state after the animation */
  opacity: 0; /* Set the initial opacity to 0 */
}

/* Initial state of the elements before they come into view */
.box, .title1 {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 768px) {

    .box{
        font-size: medium;
    }
    .boxes {
    flex-direction: column;
  }
  #about-me-container {
    margin: 20px; /* Adjusted margin for smaller screens */
  }

  .title1 {
    font-size: 2em; /* Smaller font size for mobile */
  }

}
  </style>
  
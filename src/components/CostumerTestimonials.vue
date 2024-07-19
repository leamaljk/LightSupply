<template>
            <div><h1 class="title">Customer testimonials</h1></div>

    <section id="testimonials">

      <div class="testimonial">
        <!-- Dynamic class to show/hide cards based on currentIndex -->
        <div v-for="(info, index) in customerInfos" :key="index" :class="['customer-info', { 'active': currentIndex === index }]">
          <img :src="info.img" alt="Customer photo" width="100px">
          <blockquote>
            {{ info.quote }}
          </blockquote>
          <div class="customer-details">
            <div class="external-links">
                <div class="linkovi">
            <a href="https://www.myjobquote.co.uk/t/light-supply-electrical-services" target="_blank" class="e-link"><font-awesome-icon class="icon" :icon="['fas', 'arrow-up-right-from-square']" />Click to see more on MyJobQuote <span>46</span>reviews </a> 
            <a href="https://www.mybuilder.com/profile/view/light_supply/feedback" target="_blank" class="e-link"><font-awesome-icon class="icon" :icon="['fas', 'arrow-up-right-from-square']" />And MyBuilder <span>28</span>reviews</a> 
               </div>
            </div>
            <h4 class="name">{{ info.name }}</h4>
            <p class="description">{{ info.description }}</p>
            <img class="fivestar" src="../assets/images/rating.png" alt="5star">
          </div>
        </div>
        <div class="arrows">
          <button @click="prev" class="left-arrow"></button>
          <button @click="next" class="right-arrow"></button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CustomerTestimonials',
    data() {
      return {
        currentIndex: 0,
        customerInfos: [
          {
            img: require('../assets/images/avatar (1).png'),
            quote: "Tom is very trustworthy. He did an excellent job replacing my old consumer unit with an RCBO. The job turned out to be more difficult than we thought but Tom did a very good job and used quality products. . I will definitely use his service again. P.S. Very reasonable prices.",
            name: 'Reviewed by Mohammad',
            description: 'Sockets, Switches & Fittings'
          },
          {
            img: require('../assets/images/avatar (2).png'),
            quote: "Very happy we found Tomislav on Trust a Trader. He completely rewired our house, outbuildings, garage and garden, installing extra sockets, lighting, alarms, consumer boxes, etc. He was very professional, polite and left all areas clean and tidy. We were happy to leave our door keys with him to carry on working when we were not at home. He did an exceptional job. Tomislav is a thoroughly decent gentleman and we have no hesitation in recommending him to anyone who requires an very good electrician.",
            name: 'Reviewed by Valerie van Leeuwerden',
            description: 'Complete house rewire'
          },
          {
            img: require('../assets/images/avatar (3).png'),
            quote: "This chap was probably the best electrician I have ever hired. He knew the regulations, unbodged an appalling installation which was both dangerous and could have caused a fire. He installed additional circuit breakers armoured cable boxes, junction boxes and did a full earth and circuit tested all the lights and circuits. He swept up and left my garages, loft and kitchen nice and tidy. A very diligent electrician who I can thoroughly recommend. David Lloyd",
            name: 'Reviewed by David Lloyd',
            description: 'Part P Certification Required'
          },
          {
            img: require('../assets/images/avatar (4).png'),
            quote: "Tom came to check wiring on a house I had just purchased, as I was concerned about the electrics. He was punctual, friendly and approachable. Listened to my concerns and explained every test he needed to do and any repairs that needed to be done. He gave me complete reassurance my house is safe. I would definitely use Tom again and would recommend him to anyone needing an electrician.",
            name: 'Reviewed by emma72454',
            description: 'Check wiring on 3 bed'
          },
          {
            img: require('../assets/images/avatar (5).png'),
            quote: "As with the previous glowing feedback I would like to add my own. Tom is a genuinely top bloke, professional and always courteous. Also nothing is too much trouble. From the outset Tom provided a detailed competitive quote, arrived as agreed on time, did the work as agreed and also sorted out some issues that were encountered along the way. And left only when he was satisfied and more importantly that I was too. Tom will be my go to guy now for all future electrical works :)",
            name: 'Reviewed by n42',
            description: 'Tesla EV Wall Charger installation'
          },
          {
            img: require('../assets/images/avatar (6).png'),
            quote: "True to previous reviews: reliable, knowledgeable, professional, very thorough, happy to answer questions and knew very well how the house was wired right off the bat. Quote given in writing. Lined up a new set of downlights beautifully, did not leave until he was happy that all the switches were not only working but also independent of each other. Attention to detail, got absolutely everything right, but still humble enough to make sure. This is a man who takes pride in his work and it shows.",
            name: 'Reviewed by houseproject_83 ',
            description: 'Find fault causing partial power outage and fix it '
          },
          {
            img: require('../assets/images/avatar (8).png'),
            quote: "Tom was excellent from start to finish. He arrived on time, and was professional throughout and carried the work out to a high standard. I would not hesitate to use his services in the future.",
            name: 'Reviewed by dan_634 ',
            description: 'EIRC certificate + RCD fusebox installation'
          },
          {
            img: require('../assets/images/avatar (7).png'),
            quote: "Tom was excellent he did a perfect job was very thorough and conscientious he is a very polite young man and easy to communicate with in regards to the work I needed doing and how I wanted it done he is very professional and knowledgeable Would recommend him he is an excellent and safe electrian Thank you for all your hard work 😀",
            name: 'Reviewed by Goergina ',
            description: 'Electrical Inspecting / Testing'
          },
          // Add more customer info objects here
        ]
      };
    },
    methods: {
      next() {
        if (this.currentIndex < this.customerInfos.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0; // Loop back to the first
        }
      },
      prev() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.customerInfos.length - 1; // Loop back to the last
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
.e-link{
    text-decoration: none;
}

.external-links{
    display: flex;
    flex-direction: column;
}

.linkovi a{
    display: block;
}



span, .icon{
    color: var(--secondary);
    font-weight: 600;
    font-size:large;
    margin-right: 5px ;
}

 .description {
    color: #918e8e;
    font-weight: 600;
    text-transform: uppercase;
 }
  #testimonials {
position: relative;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

#testimonials::before {
  content: '';
  position: absolute; /* Position it over the .testimonials */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url('../assets/images/left.png') center/contain no-repeat; /* Set the background */
  opacity: 0.1; /* Adjust opacity to make the image less visible */
  pointer-events: none; /* Allows clicking through the pseudo-element */
}

.testimonial {
  position: relative; /* Ensure the content is above the pseudo-element */
  z-index: 1; /* Higher z-index ensures content is above the pseudo-background */
}

.name, .e-link{
    padding: 10px;
    margin: 10px;
    color: var(--bg-color);
}

.testimonial blockquote{
    
  font-style: italic;
  color: var(--secondary);
  font-size: large;
  font-weight: 500;
  margin: 10px;
}

.customer-details{
    padding: 20px;
}
  /* Hide all customer-info by default */
  .customer-info {
    
    display: none;
  }
  
  /* Show only the active customer-info */
  .customer-info.active {
    display: block;
    
  }
  

  .title {
padding: 20px 60px;
  font-size: 4em;
  text-align: right;
  width: 100%;
  margin-bottom: 30px;
}
  .fivestar{
    margin: 20px;

width: 100px;
height: 100px;
  }

  @keyframes floatShadow {
  0%, 100% {
  }
  50% {
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
  .arrows {
  position: absolute; /* Position arrows absolutely within the relative container */
  width: 100%; /* Take full width to allow left and right arrows to sit on the edges */
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: float 3s ease-in-out infinite, floatShadow 3s ease-in-out infinite;    
  box-shadow: 0 2px 10px rgba(0, 0, 0, 1);

}

.left-arrow, .right-arrow {
  background-color: #fff; /* Arrow background color */
  border: none; /* Remove border */
  font-size: 24px; /* Adjust size as needed */
  cursor: pointer; /* Cursor pointer to indicate a clickable element */
  padding: 10px 20px; /* Padding for larger click area */
  color: var(--bg-color); /* Arrow color */
  margin-top: -50%; /* Shift upwards by half its own height to truly center */
}

/* Use pseudo-elements for a nicer arrow design */
.left-arrow::before, .right-arrow::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  border: solid var(--bg-color);
  border-width: 0 3px 3px 0;
}
.left-arrow, .right-arrow:hover{
    color: var(--primary);
}
.left-arrow::before {
  transform: rotate(135deg); /* Rotate left arrow */
}

.right-arrow::before {
  transform: rotate(-45deg); /* Rotate right arrow */
}

.left-arrow, .right-arrow {
  /* Styling for arrows */
  position: absolute; /* Position arrows absolutely */
}

.left-arrow {
  left: -80px; /* Position from the left */
}

.right-arrow {
  right: -80px; /* Position from the right */
}


@media (max-width: 768px) { /* Adjust the max-width as needed for your breakpoint */
  
  .title {
    font-size: 2em; /* Smaller font size for the title */
    padding: 20px 30px; /* Adjust padding */
    text-align: center; /* Center the title */
  }
  
  #testimonials {
    width: 90%;
    position: relative;
    padding: 10px; /* Less padding on smaller screens */
  }

  .testimonial blockquote {
    font-size: medium; /* Smaller font size for quotes */
  }

 
   .arrows {
    background-image: none;
    background: none;
    background-color: transparent;
    box-shadow: none;
    border: none;
    position: absolute; /* Fixed position to keep arrows visible when scrolling */
    bottom: 360px; /* Position at the bottom */
    left: 0; /* Align to the left */
    right: 0; /* Align to the right */
    height: 40px; /* Set a fixed height for the arrows container */
    display: flex;
    justify-content: space-between;
    padding: 0 20px; /* Add some padding on the sides */
    z-index: 100; /* High z-index to ensure visibility above other elements */
  }

  .left-arrow, .right-arrow {
    background-color: transparent; /* Consider making the background transparent */
    border: none;
    font-size: 16px; /* Smaller arrows on mobile */
    cursor: pointer;
    padding: 5px; /* Smaller padding */
    color: var(--secondary); /* Adjust the color to improve visibility */
    opacity: 0.7; /* Make the arrows slightly transparent */
  }


  .left-arrow {
    left: -20px; /* Position closer to the edge */
  }

  .right-arrow {
    right: -20px; /* Position closer to the edge */
  }

  .customer-details {
    flex-direction: column; /* Stack elements vertically */
  }



  /* Adjust the customer-info class to add padding at the bottom to avoid overlap with arrows */
  .customer-info.active {
    padding-bottom: 60px; /* Enough space to avoid the fixed arrows */
  }

  /* Ensure that the fivestar image does not take too much space */
  .fivestar {
    width: 80px; /* Smaller stars image */
    height: auto; /* Maintain aspect ratio */
    margin: 10px 0; /* Adjust margin around the stars */
  }
 

  /* Adjust other elements as needed for smaller screens */
}

  </style>
  
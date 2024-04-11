<template>
    <div id="container">
      <div class="content">
        <br>
            <br>
        <div class="nav-logo">
            <h1 class="logo-signL"> LIGHT <span> SUPPLY </span> </h1>
            
            </div>
            <br>
        <h1>
          Electrical Services
        </h1>
        <br>
            <br>
        <p>
            If you'd like to discuss your project, please fill out this contact form. I'll review your information and get back to you as soon as possible to discuss how I can help. 
            I'm here to answer any questions you may have and look forward to hearing from you.
        </p>

      </div>
      <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="form.firstName" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="form.lastName" required>
      </div>
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone Number: (not required)</label>
        <input type="tel" id="phone" v-model="form.phone" required>
      </div>
      <div class="form-group">
        <label for="enquiry">Your Enquiry:</label>
        <textarea id="enquiry" v-model="form.enquiry" required></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="submit-btn">Submit</button>
      </div>
    </form>
    </div>
  </template>



  <script>
  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          enquiry: ''
        }
      };
    },
    methods: {
      async submitForm() {
        const serviceEndpoint = 'https://formspree.io/f/xpzvjdpd';  
        try {
          const response = await fetch(serviceEndpoint, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.form),
          });
  
          if (response.ok) {
            alert('Thanks for letting me know! I will get back to you as soon as possible.');
            this.form = { firstName: '', lastName: '', email: '', phone: '', enquiry: '' }; // Reset form
          } else {
            alert('Failed to send a message. Please try again.');
          }
        } catch (error) {
          alert('An error occurred. Please try again.');
        }
      }
    }
  };
  </script>
  
  <style scoped>

.nav-logo{
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: row;
}
  
  .logo {
  display: flex;
  height: 160px; /* You need a specific height to align items in the center vertically */
  margin: 20px;
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
  font-weight: 100;

}
span{
  color: var(--secondary);
  font-size: 2.2rem;
  font-weight: 700;
}

h1{
  color: var(--title);
}

.logo img {
  max-width: 100%;
  max-height: 100%;
}

p{
  line-height: 1.6;
}
  
  #container {
    background: rgba(255, 255, 255, 0.9);
  color: #333;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
   justify-content: center;
    padding: 40px 20px;
  }
  
  .content {
    align-items: center;
    justify-content:center;
    flex: 1;
    max-width: 600px;
  }
  
  .form {
    flex: 1;
    max-width: 600px;
    align-items: flex-start;
    justify-content: center;
    margin: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
    display: block; /* Make sure form-group is a block to contain its elements correctly */
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%; /* Full width */
    padding: 10px;
    border: 1px solid #ccc; /* Consistent border size */
    border-radius: 5px;
    transition: border-color 0.3s; /* Smooth transition for border color */
    font-family: "Roboto";

  }
  
  /* Style for when the user focuses on an input */
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: var(--secondary); /* Focus color */
    outline: none; /* Remove default focus outline */
  }
  
  /* Style for when the user has entered valid input */
  .form-group input:valid,
  .form-group textarea:valid {
    border-bottom: 3px solid green; /* Indicates valid input */
  }
  
  /* Style for when the user has entered invalid input */
  .form-group input:invalid,
  .form-group textarea:invalid {
    border-bottom: 3px solid var(--secondary); /* Indicates invalid input */
  }
  
  button {
    background-color: var(--secondary);
    color: white;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 20px;
  }

  button:hover{
    transform: scale(1.1);
  }
  /* Responsive design styles */
  @media (max-width: 768px) {
    #container {
      flex-direction: column;
      align-items: center;

    }

    .logo img{
      width: 120px;
      height: 120px;
      padding: 0;
    }
    .content h1 
    {
      font-size: x-large;
    }
    .content p 
    {
      font-size: small;
    }
    
    .content, .form {

      max-width: 100%; /* On small screens, allow the content and form to fill the available space */
    }

    span {
  font-size: 1.6rem;
    }

  }

  @media (max-width: 480px) {

  
    span {
  font-size: 1.6rem;
    }
  }
  </style>
  
<template>
    <div id="main-div">
    <div class="faq-container">
      <div class="faq-title">
        <h1>Frequently Asked Questions </h1>
        <h3><font-awesome-icon :icon="['fas', 'circle-question']" class="my-icon-style"/>   Get Answers to Common Questions </h3>
      </div>
      <div class="faq-questions">
        <FaqItem
          v-for="question in questions"
          :key="question.id"
          :question="question"
        />
      </div>
      <img src="../assets/images/faq.png" class="faq-image" alt="FAQ Image">
    </div>
</div>
  </template>
  
  <script>
  import FaqItem from './FaqItem.vue';
  
  export default {
    components: {
      FaqItem
    },
    data() {
      return {
        questions: [
          {
            id: 1,
            title: 'Do you provide emergency electrical services?',
            answer: 'Yes, I do offer emergency services for urgent electrical issues.  Contact me anytime, and I\'ll be there to assist you.'
          },
          {
            id: 2,
            title: 'Are you licensed and insured?',
            answer: 'Absolutely. I am fully licensed NICEIC Domestic Installer, insured, and comply with all industry standards and regulations to ensure safe and reliable service.'
          },
          {
            id: 3,
            title: 'How do I get a quote for my electrical project?',
            answer: 'You can easily get a quote by contacting me with your project details. I provide free, no-obligation estimates.'
          },
          {
            id: 4,
            title: 'What areas do you serve?',
            answer: 'I primarily serve my region, but feel free to contact me for more information about our service areas.'
          },
          {
            id: 5,
            title: ' Do you offer any warranties on your work?',
            answer: 'Absolutely. I stand behind the quality of my work, and all of my labor will be discussed personally with the client. Besides that, I offer a 3-year warranty on full rewires and partial rewires. All the materials and products used are covered by the manufacturer\'s warranties, which vary depending on the product'
          },
          {
            id: 5,
            title: ' Do you offer any warranties on your work?',
            answer: 'Absolutely. I stand behind the quality of my work, and all of my labor will be discussed personally with the client. Besides that, I offer a 3-year warranty on full rewires and partial rewires. All the materials and products used are covered by the manufacturer\'s warranties, which vary depending on the product'
          },
          // ... add more questions as needed
        ]
      };
    }
  };
  </script>

<style scoped>

#main-div{
    width: 100%;
    background: var(--secondary);
    padding: 5%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

}
  .faq-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "title title"
      "questions image";
    gap: 20px;
    background: white;
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  .faq-title {
    grid-area: title;
    text-align: center;
    background: white;
    padding: 10px;
    margin-bottom: 10px;
  }

  .faq-title h1{
    margin: 20px;
  }

  .my-icon-style{
    color: var(--text-color-light);

  }
  .faq-title h3{
    margin: 20px;
    color: var(--text-color-light);
  }
  .faq-questions {
    grid-area: questions;
    background: white;
    padding: 20px;
    text-align: left;
  }

  .faq-section {
    margin-bottom: 20px;
  }

  .question h4 {
    cursor: pointer;
    margin: 10px 0;
  }

  .faq-image {
    grid-area: image;
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    .faq-container {
      grid-template-columns: 1fr;
      grid-template-areas:
        "title"
        "questions"
        "image";
    }

    .faq-image {
      order: -1; /* Image above the questions on small screens */
    }

#main-div {
  width: 100%;
  background: var(--secondary);
  padding: 5% 2%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.faq-container {
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  margin: auto;
  padding: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  
}

.faq-title {
  text-align: center;
  background: white;
  padding: 10px;
  font-size: 12px;
  margin-bottom: 0;
  padding-bottom: 0;

}

.title {
  font-size: 18px;
  margin: 10px 0;
}

.subtitle {
  font-size: 18px;
  margin: 10px 0;
  color: var(--text-color-light);
}

.my-icon-style {
  color: var(--text-color-light);
}

.faq-questions {
  background: white;
  padding: 7px;
  text-align: left;
  font-size: smaller;
}

.faq-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  margin-top: 20px;
}


}
</style>
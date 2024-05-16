<template>
    <div class="faq-item">
      <h4 :class="{ 'is-active': isActive }" @click="toggle">
        {{ question.title }}
        <span class="arrow" :class="{ 'is-active': isActive }">&#x276F;</span>
      </h4>
      <div v-if="isActive" class="answer">
        {{ question.answer }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        isActive: false
      };
    },
    methods: {
      toggle() {
        this.isActive = !this.isActive;
      }
    }
  };
  </script>
  
  <style scoped>
.faq-item{
    border-bottom: 2px solid var(--text-color-light);
    padding: 24px;

}

  h4 {
    cursor: pointer;
    user-select: none;
    font-size: 24px;
    font-weight: 500;
  }
  
  h4.is-active {
    color: var(--secondary);
  }
  
  .arrow {
    display: inline-block;
    transition: transform 0.2s;
    color: var(--secondary);
    padding-left: 10px;
    font-size: 28px;
    
}
  
  .arrow.is-active {
    transform: rotate(90deg);
  }
  
  .answer {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
  h4 {
    
    font-size: 20px;
  }
}
  </style>
  
import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHouse,
  faCircleUser,
  faCircleCheck,
  faComment,
  faCircleQuestion,
  faArrowUpRightFromSquare,
  faEnvelopeCircleCheck,
  faEnvelope,
  faPhone,
  faLocationPin,
  faImage,
  faSquarePhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add the icons to the library
library.add(
  faHouse,
  faCircleUser,
  faCircleCheck,
  faComment,
  faCircleQuestion,
  faArrowUpRightFromSquare,
  faEnvelopeCircleCheck,
  faEnvelope,
  faPhone,
  faLocationPin,
  faImage,
  faSquarePhone
);

const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');

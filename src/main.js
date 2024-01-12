import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import router from './router/router.js';
import './data/projects.js';
import './style/home.css';
import './style/tailwind.css';

import { MotionPlugin } from '@vueuse/motion'

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
   
  };
  

// firebase init 설정
const firebaseApp = firebase.initializeApp(firebaseConfig);

// db나 auth 같이 사용
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };


import jQuery from "jquery";
const $ = jQuery;
window.$ = $;



const app = createApp(App);

app.use(firebaseApp);
app.use(MotionPlugin);
app.use(router);


app.mount("#app");
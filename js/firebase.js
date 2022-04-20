
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaBFPZAVFLHQGZf2of7o3cgWOX-31pM0s",
  authDomain: "juantiendacesde.firebaseapp.com",
  projectId: "juantiendacesde",
  storageBucket: "juantiendacesde.appspot.com",
  messagingSenderId: "697437203164",
  appId: "1:697437203164:web:107035180c16ed0b126219",
  measurementId: "G-EQL2R9NL65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
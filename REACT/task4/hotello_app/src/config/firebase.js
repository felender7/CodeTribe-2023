// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBpbFYoEq8S3WYuL8cXMt64LkmSqcfUYY",
  authDomain: "hotel-app-e99ae.firebaseapp.com",
  projectId: "hotel-app-e99ae",
  storageBucket: "hotel-app-e99ae.appspot.com",
  messagingSenderId: "362391621435",
  appId: "1:362391621435:web:af5d8713d7ae653092311e",
  measurementId: "G-NE32L00KGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
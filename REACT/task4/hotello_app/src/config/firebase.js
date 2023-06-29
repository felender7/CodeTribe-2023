
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import getAuth from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBBpbFYoEq8S3WYuL8cXMt64LkmSqcfUYY",
  authDomain: "hotel-app-e99ae.firebaseapp.com",
  projectId: "hotel-app-e99ae",
  storageBucket: "hotel-app-e99ae.appspot.com",
  messagingSenderId: "362391621435",
  appId: "1:362391621435:web:af5d8713d7ae653092311e",
  measurementId: "G-NE32L00KGL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export{auth}
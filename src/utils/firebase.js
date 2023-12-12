// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYOGyWKelwFwYgqAR7Z--jXDApW7ZWgZA",
  authDomain: "netflixgpt-46c8d.firebaseapp.com",
  projectId: "netflixgpt-46c8d",
  storageBucket: "netflixgpt-46c8d.appspot.com",
  messagingSenderId: "588989428143",
  appId: "1:588989428143:web:4cb2ea0464971bd3d77f5a",
  measurementId: "G-Z5RD83TG0W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

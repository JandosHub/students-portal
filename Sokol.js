// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2njCPRZCb25Gm31Ejs0RZmekGTPa9PyM",
  authDomain: "gylymizhoba-cd2ef.firebaseapp.com",
  projectId: "gylymizhoba-cd2ef",
  storageBucket: "gylymizhoba-cd2ef.firebasestorage.app",
  messagingSenderId: "998973758437",
  appId: "1:998973758437:web:f6db1c77eadd4f0f3bed0c",
  measurementId: "G-V1TX4E4QE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 // Тіркелу мысалы
 function register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log("Тіркелді:", userCredential.user);
      })
      .catch(error => {
        console.error(error.message);
      });
  }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQQbbn7Wnjacxr_QsHbKYqklyJYowSkgM",
  authDomain: "e-learning-1b507.firebaseapp.com",
  projectId: "e-learning-1b507",
  storageBucket: "e-learning-1b507.appspot.com",
  messagingSenderId: "1019582264294",
  appId: "1:1019582264294:web:1217c67670b6fe66cb5c27",
  measurementId: "G-R0831HMN1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNwk1-WetlOoW8LXBxITj8jtWV38picXQ",
  authDomain: "filrebase-login.firebaseapp.com",
  databaseURL: "https://filrebase-login-default-rtdb.firebaseio.com",
  projectId: "filrebase-login",
  storageBucket: "filrebase-login.appspot.com",
  messagingSenderId: "71567733722",
  appId: "1:71567733722:web:c55e5fc31488bbea5446e3",
  measurementId: "G-Y4HQGS29V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export {auth, provider}
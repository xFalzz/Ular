import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-86ms53CcR-cYnJ1LYiCKXwLcsgkGdcw",
  authDomain: "the-cow-47a4a.firebaseapp.com",
  projectId: "the-cow-47a4a",
  storageBucket: "the-cow-47a4a.appspot.com",
  messagingSenderId: "188328880869",
  appId: "1:188328880869:web:6bcf2272b5630666dec20c",
  measurementId: "G-M7V5LXG05J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
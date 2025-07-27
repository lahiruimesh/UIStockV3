// firebase-config.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, signInAnonymously } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgqaOGreMjmdoKLc4jQibdDlw9HD0_1vo",
    authDomain: "uistockv3.firebaseapp.com",
    projectId: "uistockv3",
    storageBucket: "uistockv3.firebasestorage.app",
    messagingSenderId: "693118718290",
    appId: "1:693118718290:web:91868be86a441b5cb86a8b",
    measurementId: "G-HDZQ338Z0D"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Storage
export const auth = getAuth(app);
export const storage = getStorage(app);

// Function to ensure user is authenticated for storage operations
export const ensureAuth = async () => {
  if (!auth.currentUser) {
    try {
      await signInAnonymously(auth);
      console.log("User signed in anonymously for storage access");
    } catch (error) {
      console.error("Error signing in anonymously:", error);
      throw error;
    }
  }
};







/*

const firebaseConfig = {
    apiKey: "AIzaSyBgqaOGreMjmdoKLc4jQibdDlw9HD0_1vo",
    authDomain: "uistockv3.firebaseapp.com",
    projectId: "uistockv3",
    storageBucket: "uistockv3.firebasestorage.app",
    messagingSenderId: "693118718290",
    appId: "1:693118718290:web:91868be86a441b5cb86a8b",
    measurementId: "G-HDZQ338Z0D"
  };
  */
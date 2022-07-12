// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "**********",
  authDomain: "**********",
  projectId: "**********",
  storageBucket: "**********",
  messagingSenderId: "**********",
  appId: "**********",
  measurementId: "**********",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db, app };

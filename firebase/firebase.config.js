import { initializeApp } from "firebase/app";
// Only import getAnalytics if window is defined (i.e., in a browser environment)
let getAnalytics;
if (typeof window !== "undefined") {
  getAnalytics = require("firebase/analytics").getAnalytics;
}

const firebaseConfig = {
  apiKey: "AIzaSyDK5IX2l0wYeToaeUrw1sczNEt4w2r_T4Q",
  authDomain: "binary-bookshelf.firebaseapp.com",
  projectId: "binary-bookshelf",
  storageBucket: "binary-bookshelf.appspot.com",
  messagingSenderId: "895403265606",
  appId: "1:895403265606:web:87f9982e9de72a86d50447",
  measurementId: "G-87XG10KV1F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

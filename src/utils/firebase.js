import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUCKSy_EKKtUFvxkNBgJzlLuMMTZ8bxWo",
  authDomain: "netflixgpt7.firebaseapp.com",
  projectId: "netflixgpt7",
  storageBucket: "netflixgpt7.appspot.com",
  messagingSenderId: "790926429469",
  appId: "1:790926429469:web:2aebeb370d4e85de9d25f4",
  measurementId: "G-DLZH9LED8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
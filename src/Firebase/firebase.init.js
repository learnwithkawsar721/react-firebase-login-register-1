import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confic";
const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebase;

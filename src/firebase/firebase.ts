import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useMemo } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBZq76UZIrjhA1z6OGZuwxqyTOxW3jbk1Y",
  authDomain: "dpica-app.firebaseapp.com",
  projectId: "dpica-app",
  storageBucket: "dpica-app.appspot.com",
  messagingSenderId: "441096894984",
  appId: "1:441096894984:web:bbff5320090380cb8f6fbd",
  measurementId: "G-PL32BPCTG9"
};

const gettingApp = () => {
  return initializeApp(firebaseConfig);
}

const instanceOfAuth = (app) => {
  return getAuth(app);
}

const instanceOfFireStore = (app) => {
  return getFirestore(app);
}

export const app = gettingApp();
export const auth = instanceOfAuth(app);
export const db = instanceOfFireStore(app);

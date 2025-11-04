// FirebaseConfig.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmdcU7ae3qbfT7xBQtemMjC59nEqoI61g",
  authDomain: "thefirebaseapp-2162c.firebaseapp.com",
  projectId: "thefirebaseapp-2162c",
  storageBucket: "thefirebaseapp-2162c.appspot.com",
  messagingSenderId: "437994417671",
  appId: "1:437994417671:web:c68ca33f8dc6609df984a2",
  measurementId: "G-9SB1737NFY"
};

// ✅ Initialize only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const FIREBASE_APP = app;
export const FIREBASE_AUTH = getAuth(app);
export const FIREBASE_DB = getFirestore(app);
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
import {getFunctions} from "firebase/functions";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiRudjN_02HUR5hZr6skZ7D_-H2nUCROg",
  authDomain: "ecoeats-4fad0.firebaseapp.com",
  projectId: "ecoeats-4fad0",
  storageBucket: "ecoeats-4fad0.appspot.com",
  messagingSenderId: "201273095399",
  appId: "1:201273095399:web:e7d561b7cfda098c121e42"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const functions = getFunctions(app)
export const storage = getStorage(app)

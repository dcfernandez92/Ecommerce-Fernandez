import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyB5K_nCws0S9MRor3PdlXdQ1Jb8qHn_yLw",
  authDomain: "coderhouse-ecommerce-1da45.firebaseapp.com",
  projectId: "coderhouse-ecommerce-1da45",
  storageBucket: "coderhouse-ecommerce-1da45.appspot.com",
  messagingSenderId: "144148504920",
  appId: "1:144148504920:web:33f60bd672716e81ddc52d"
}

const app = initializeApp(firebaseConfig)
export const db =  getFirestore(app)
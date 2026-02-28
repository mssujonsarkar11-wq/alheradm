import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4FJqFmdM3KGn7_VTdTV7ADgpxmqs3yjw",
  authDomain: "app1-1e593.firebaseapp.com",
  projectId: "app1-1e593",
  storageBucket: "app1-1e593.firebasestorage.app",
  messagingSenderId: "281580775640",
  appId: "1:281580775640:web:3e8ef084d6650c29010fad"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

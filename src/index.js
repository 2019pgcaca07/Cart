import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-g_jvkTyNk3nXWcQFsUVcaK_Cfvd__FE",
  authDomain: "cart-44aa1.firebaseapp.com",
  projectId: "cart-44aa1",
  storageBucket: "cart-44aa1.appspot.com",
  messagingSenderId: "261286255440",
  appId: "1:261286255440:web:f4a63ff401dfa8cf90aa55"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




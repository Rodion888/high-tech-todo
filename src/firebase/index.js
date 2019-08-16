// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaaEnX7Iv6n7C_OpzfOaehmiPTDKmX_xI',
  authDomain: 'crazy-todo.firebaseapp.com',
  databaseURL: 'https://crazy-todo.firebaseio.com',
  projectId: 'crazy-todo',
  storageBucket: '',
  messagingSenderId: '1035702220677',
  appId: '1:1035702220677:web:e50c1727e1821d68',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

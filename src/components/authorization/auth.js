import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCNfGxe1uUi8e1XDoVd7rbrJmEvjuDh-vk',
  authDomain: 'crazy-todo-e199e.firebaseapp.com',
  databaseURL: 'https://crazy-todo-e199e.firebaseio.com',
  projectId: 'crazy-todo-e199e',
  storageBucket: 'crazy-todo-e199e.appspot.com',
  messagingSenderId: '675554260223',
  appId: '1:675554260223:web:c132cc3af086bfd9',
}

firebase.initializeApp(firebaseConfig)
const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

class Auth {
  constructor() {
    this.authenticated = false
  }

  login(cb) {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user
        if (user) {
          this.authenticated = true
          cb()
        }
      })
      .catch(error => {
        console.log({ error })
      })
  }

  logout(cb) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.authenticated = false
        cb()
      })
      .catch(error => {
        console.log({ error })
      })
  }

  isAuthenticated() {
    return this.authenticated
  }
}

export default new Auth()

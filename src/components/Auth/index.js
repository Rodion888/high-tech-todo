import { firebaseAuth, provider } from '../../helpers/index'

class Auth {
  constructor() {
    this.authenticated = false
  }

  login(cb) {
    firebaseAuth
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
    firebaseAuth
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

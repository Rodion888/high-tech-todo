import { loginViaGoogle, logoutFromApp } from '../../api/index'

class Auth {
  authenticated: boolean
  userId: string
  constructor() {
    this.authenticated = false
    this.userId = ''
  }

  login(cb: { (): void; (): void }) {
    loginViaGoogle().then(user => {
      if (user) {
        this.authenticated = true
        this.userId = user.uid
        cb()
      }
    })
  }

  logout(cb: { (): void; (): void }) {
    logoutFromApp().then(() => {
      this.authenticated = false
      cb()
    })
  }

  getUserId() {
    return this.userId
  }

  isAuthenticated() {
    return this.authenticated
  }
}

export default new Auth()

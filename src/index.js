import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as Sentry from '@sentry/browser'
import registerServiceWorker from './registerServiceWorker'

Sentry.init({
  dsn: 'https://332c5e97ee274130a6690e7672471635@sentry.io/1548099',
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

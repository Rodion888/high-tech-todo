import React from 'react'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import rootReducer from './reducers/rootReducer'
import Main from './Main'

const store = createStore(rootReducer)

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App

import React from 'react'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import rootReducer from './reducers/rootReducer'
import Main from './Main'

const store = createStore(rootReducer, applyMiddleware(thunk))

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

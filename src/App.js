import React from 'react'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/index'
import Main from './Main'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

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

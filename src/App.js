import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import Main from './Main';

const store = createStore(rootReducer);

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    )
  }
}

export default App;
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Layout from './screens/Layout';
import reducers from './src/reducers';

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//noinspection JSUnusedGlobalSymbols
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/Home'


export default class App extends PureComponent {
  render () {
    return <Provider store={store}>
      <Router>
        <Route path="/home" component={Home} />
      </Router>
    </Provider>
  }
}
import "phoenix_html"

import React, {Component} from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import ReactRouterRedux, { routerMiddleware, push } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import Nav from './components/Nav.jsx'
import Campaigns from './components/Campaigns.jsx'
import Channels from './components/Channels.jsx'

const history = createHistory()

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history)
  )
)

const root = document.getElementById('root')

if (root) {
  render(
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Nav/>
          <Route exact path="/">
            <Redirect to="/campaigns"/>
          </Route>

          <Route exact path="/campaigns" component={Campaigns}/>
          <Route exact path="/channels" component={Channels}/>
        </div>
      </Router>
    </Provider>,

    root
  )
}

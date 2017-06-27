// @flow
import 'phoenix_html'

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Redirect, Switch } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'
import Header from './components/Header'
import Campaign from './components/campaigns/Campaign'
import Campaigns from './components/campaigns/Campaigns'
import Channels from './components/channels/Channels'

const history = createHistory()

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
    logger
  )
)

const root = document.getElementById('root')

if (root) {
  render(
    <Provider store={store}>
      <Router history={history}>
        <div className='react-container'>
          <Header />
          <main>
            <div className='md-grid'>
              <Switch>
                <Route exact path='/'>
                  <Redirect to='/campaigns' />
                </Route>

                <Route exact path='/campaigns' component={Campaigns} />
                <Route exact path='/campaigns/:id' component={Campaign} />

                <Route exact path='/channels' component={Channels} />
              </Switch>
            </div>
          </main>
        </div>
      </Router>
    </Provider>,

    root
  )
}

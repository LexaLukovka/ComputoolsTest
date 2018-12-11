import React from 'react'
import ReactDOM from 'react-dom'

import { configure } from 'mobx';
import { Provider } from 'mobx-react'

import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'

import moviesStore from 'mobX/moviesStore'

import LayoutScene from 'components/LayoutScene'


configure({
  enforceActions: true
});

const stores = {
  moviesStore,
}

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(() =>
  <Provider {...stores}>
    <Router>
      <LayoutScene />
    </Router>
  </Provider>,
)

if (module.hot) {
  module.hot.accept()
}

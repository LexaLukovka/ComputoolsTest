import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'

import Background from 'components/Background'
import Header from 'components/Header'
import Container from 'components/Container'

import IndexScene from 'components/IndexScene'

const LayoutScene = () =>
  <div style={{ background: '#f2f3f5' }}>
    <Background>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={IndexScene} />
        </Switch>
      </Container>
    </Background>
  </div>

export default withTheme(LayoutScene)

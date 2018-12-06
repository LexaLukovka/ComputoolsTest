import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'

import Background from 'components/Background'
import Header from 'components/Header'
import Container from 'components/Container'

import IndexScene from 'components/IndexScene'
import MovieScene from 'components/@movie.id/MovieScene'

const LayoutScene = () =>
  <React.Fragment>
    <Background>
      <Header />
      <div style={{ paddingTop: 60 }}>
        <Container>
          <Switch>
            <Route exact path="/" component={IndexScene} />
            <Route exact path="/movie/:id" component={MovieScene} />
          </Switch>
        </Container>
      </div>
    </Background>
  </React.Fragment>

export default withTheme(LayoutScene)

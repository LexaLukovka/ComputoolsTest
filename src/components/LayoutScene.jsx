import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
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
            <Route exact path="/movies/:page" component={IndexScene} />
            <Route exact path="/movie/:id" component={MovieScene} />
            <Redirect to={`/movies/${1}`} />
          </Switch>
        </Container>
      </div>
    </Background>
  </React.Fragment>

export default withTheme(LayoutScene)

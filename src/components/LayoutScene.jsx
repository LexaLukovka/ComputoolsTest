import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import withTheme from 'utils/withTheme'

import Header from 'components/Header'
import Container from 'components/Container'

import IndexScene from 'components/IndexScene'
import MovieScene from 'components/@movie.id/MovieScene'
import FavoriteScene from 'components/@favorite/FavoriteScene'

const LayoutScene = () =>
  <React.Fragment>
    <Header />
    <div style={{ paddingTop: 60 }}>
      <Container>
        <Switch>
          <Route exact path="/favorite" component={FavoriteScene} />
          <Route exact path="/movies/:page" component={IndexScene} />
          <Route exact path="/movie/:id" component={MovieScene} />
          <Redirect to={`/movies/${1}`} />
        </Switch>
      </Container>
    </div>
  </React.Fragment>

export default withTheme(LayoutScene)

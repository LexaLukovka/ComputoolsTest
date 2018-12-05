import React from 'react'
import { object } from 'prop-types'
import connector from './connector'
import Loading from '../Loading'
import MoviesScene from './MoviesScene'

class IndexScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    document.title = 'Computools'
    actions.movies.load()
  }

  render() {
    const { movies } = this.props
    return movies.loading ? <Loading /> : <MoviesScene movies={movies.movies} />
  }
}

IndexScene.propTypes = {
  actions: object.isRequired,
  movies: object.isRequired,
}

export default connector(IndexScene)

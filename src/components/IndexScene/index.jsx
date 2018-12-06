import React from 'react'
import { object } from 'prop-types'
import connector from './connector'
import Loading from '../Loading'
import MoviesScene from './MoviesScene'
import NotFound from 'components/NotFound'
import isEmpty from 'lodash/isEmpty'

class IndexScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props
    document.title = 'Computools'
    actions.movies.load(match.params.page)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { actions, match } = this.props
    const { page } = match.params
    if (prevProps.match.params.page !== page) {
      actions.movies.load(page)
    }
  }

  render() {
    const { movies } = this.props

    if (movies.loading) return <Loading />
    if (isEmpty(movies.movies.results)) return <NotFound />

    return <MoviesScene movies={movies.movies.results} />
  }
}

IndexScene.propTypes = {
  actions: object.isRequired,
  match: object.isRequired,
  movies: object.isRequired,
}

export default connector(IndexScene)

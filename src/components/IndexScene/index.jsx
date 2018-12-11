import React from 'react'
import { bool, object, shape } from 'prop-types'
import Loading from '../Loading'
import MoviesScene from './MoviesScene'
import NotFound from 'components/NotFound'
import isEmpty from 'lodash/isEmpty'

import { inject, observer } from 'mobx-react'

@inject('moviesStore')
@observer
export default class IndexScene extends React.Component {
  componentDidMount() {
    const { moviesStore, match } = this.props
    console.log(moviesStore)
    document.title = 'Computools'
    moviesStore.load(match.params.page)
    moviesStore.path(match.url)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { moviesStore, match } = this.props
    const { page } = match.params
    if (prevProps.match.params.page !== page) {
      moviesStore.load(page)
      moviesStore.path(match.url)
    }
  }

  render() {
    const { moviesStore: { loading, movies } } = this.props

    if (loading || loading === undefined) return <Loading />
    if (isEmpty(movies.results)) return <NotFound />

    return <MoviesScene movies={movies.results} />
  }
}

IndexScene.propTypes = {
  match: object.isRequired,
  moviesStore: shape({
    loading: bool,
    movies: object,
  }),
}

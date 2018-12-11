import React from 'react'
import { array, object } from 'prop-types'
import { Button } from '@material-ui/core'
import isEmpty from 'lodash/isEmpty'
import { inject, observer } from 'mobx-react'


@inject('moviesStore')
@observer
export default class FavoriteButtonAction extends React.Component {
  handleFavorite = movie => {
    const { moviesStore } = this.props
    moviesStore.changeFavorite(movie)
  }

  render() {
    const { moviesStore: { favorite, current: movie } } = this.props

    return !isEmpty(favorite) ? (favorite.findIndex(f => f.id === movie.id) < 0 ?
      <Button color="inherit" variant="outlined" onClick={() => this.handleFavorite(movie)}>Add favorite</Button>
      :
      <Button color="inherit" variant="outlined" onClick={() => this.handleFavorite(movie)}>
        Remove favorite
      </Button>)
      :
      <Button color="inherit" variant="outlined" onClick={() => this.handleFavorite(movie)}>Add favorite</Button>
  }
}

FavoriteButtonAction.propTypes = {
  moviesStore: object,
}

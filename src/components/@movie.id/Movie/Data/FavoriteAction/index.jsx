import React from 'react'
import { array, object } from 'prop-types'
import { Button } from '@material-ui/core'
import isEmpty from 'lodash/isEmpty'
import connector from '../../../connector'

class FavoriteAction extends React.Component {
  handleFavorite = movie => {
    const { actions } = this.props
    actions.movies.favorite(movie)
  }

  render() {
    const { favorite, movie } = this.props

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

FavoriteAction.propTypes = {
  actions: object.isRequired,
  movie: object.isRequired,
  favorite: array.isRequired,
}

export default connector(FavoriteAction)

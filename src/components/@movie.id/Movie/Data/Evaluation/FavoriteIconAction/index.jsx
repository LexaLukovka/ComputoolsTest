import React from 'react'
import { array, object } from 'prop-types'
import { IconButton, withStyles } from '@material-ui/core'
import StarIcon from 'mdi-react/StarIcon'
import isEmpty from 'lodash/isEmpty'
import connector from '../connector'

const styles = {
  icon: {
    width: 40,
    height: 40,
    color: 'white',
  },
}

class FavoriteIconAction extends React.Component {
  handleFavorite = movie => {
    const { actions } = this.props
    actions.movies.favorite(movie)
  }

  render() {
    const { classes, favorite, movie } = this.props

    return !isEmpty(favorite) && (favorite.findIndex(f => f.id === movie.id) < 0 &&
      <IconButton onClick={() => this.handleFavorite(movie)}>
        <StarIcon className={classes.icon} />
      </IconButton>)
  }
}

FavoriteIconAction.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  movie: object.isRequired,
  favorite: array.isRequired,
}

export default withStyles(styles)(connector(FavoriteIconAction))

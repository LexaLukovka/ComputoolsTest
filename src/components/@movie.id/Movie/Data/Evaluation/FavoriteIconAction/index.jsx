import React from 'react'
import { array, object } from 'prop-types'
import { IconButton, withStyles } from '@material-ui/core'
import StarIcon from 'mdi-react/StarIcon'
import StarBorderIcon from 'mdi-react/StarBorderIcon'
import isEmpty from 'lodash/isEmpty'
import { inject, observer } from 'mobx-react'

const styles = {
  icon: {
    width: 40,
    height: 40,
    color: 'white',
    border: '2px solid',
    borderRadius: 5,
  },
}

@inject('moviesStore')
@withStyles(styles)
@observer
export default class FavoriteIconAction extends React.Component {
  handleFavorite = movie => {
    const { moviesStore } = this.props
    moviesStore.changeFavorite(movie)
  }

  render() {
    const { classes, moviesStore: { favorite, current: movie } } = this.props

    return !isEmpty(favorite) ? (favorite.findIndex(f => f.id === movie.id) < 0 ?
      <IconButton onClick={() => this.handleFavorite(movie)}>
        <StarBorderIcon className={classes.icon} />
      </IconButton>
      :
      <IconButton onClick={() => this.handleFavorite(movie)}>
        <StarIcon className={classes.icon} />
      </IconButton>)
      :
      <IconButton onClick={() => this.handleFavorite(movie)}>
        <StarBorderIcon className={classes.icon} />
      </IconButton>
  }
}

FavoriteIconAction.propTypes = {
  classes: object,
  moviesStore: object,
}


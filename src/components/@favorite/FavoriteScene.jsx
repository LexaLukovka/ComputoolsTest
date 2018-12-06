import React from 'react'
import { array, object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Favorite from 'components/@favorite/Favorite'
import NotFound from 'components/NotFound'
import isEmpty from 'lodash/isEmpty'
import connector from './connector'

const styles = theme => ({
  root: {
    margin: 50,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: theme.palette.primary.dark,
  },
})

const FavoriteScene = ({ classes, favorite }) => {
  if (isEmpty(favorite)) return <NotFound />
  return <div className={classes.root}>
    <div className={classes.container}>
      <Typography variant="h6" className={classes.title}>My favorite</Typography>
      {favorite.map(movie => <Favorite key={movie.id} movie={movie} />)}
    </div>
  </div>
}

FavoriteScene.propTypes = {
  classes: object.isRequired,
  favorite: array.isRequired,
}

export default withStyles(styles)(connector(FavoriteScene))

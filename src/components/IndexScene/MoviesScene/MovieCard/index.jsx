import React from 'react'
import { object } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/es/Avatar/Avatar'

const styles = {
  root: {
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
}

const url = 'http://image.tmdb.org/t/p/w342'
const MovieCard = ({ classes, movie }) =>
  <Card className={classes.root}>
    <Avatar className={classes.image} src={`${url}${movie.poster_path}`} />
  </Card>

MovieCard.propTypes = {
  classes: object.isRequired,
  movie: object.isRequired,
}

export default withStyles(styles)(MovieCard)

import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Avatar, withStyles } from '@material-ui/core'
import Data from './Data'

const styles = {
  root: {
    marginTop: 50,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 292,
    borderRadius: 0,
  },
}

const url = 'http://image.tmdb.org/t/p/w342'
const Favorite = ({ classes, movie }) =>
  <div className={classes.root}>
    <Link to={`/movie/${movie.id}`}>
      <Avatar className={classes.image} src={`${url}${movie.poster_path}`} />
    </Link>
    <Data movie={movie} />
  </div>

Favorite.propTypes = {
  classes: object.isRequired,
  movie: object.isRequired,
}

export default withStyles(styles)(Favorite)

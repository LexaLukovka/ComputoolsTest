import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import MovieCard from './MovieCard'

const styles = theme => ({
  root: {
    marginTop: 64,
    display: 'flex',
    justifyContent: 'center',
  },
  grid: {
    marginTop: 0,
    margin: '80px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridColumnGap: '20px',
    gridRowGap: '40px',

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '300px 300px 300px',
      margin: 0,
    },

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '280px 280px',
      margin: 0,
    },

    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
      margin: 0,
    },
  },
})

const MoviesScene = ({ classes, movies }) =>
  <div className={classes.root}>
    <div className={classes.grid}>
      {movies.results.map(movie =>
        <MovieCard key={movie.id} movie={movie} />)}
    </div>
  </div>

MoviesScene.propTypes = {
  classes: object.isRequired,
  movies: object.isRequired,
}

export default withStyles(styles)(MoviesScene)

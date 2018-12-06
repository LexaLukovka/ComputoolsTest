import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import MovieCard from './MovieCard'
import Pages from './Pages'

const styles = theme => ({
  root: {
    marginTop: 64,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  grid: {
    marginTop: 0,
    margin: 90,

    display: 'grid',
    gridTemplateColumns: '342px 342px 342px 342px 342px',
    gridColumnGap: '20px',
    gridRowGap: '40px',

    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '300px 300px 300px 300px',
      margin: 40,
    },

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '300px 300px 300px',
      margin: 0,
    },

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '280px 280px',
      marginTop: 20,
    },

    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '150px 150px',
      marginTop: 10,
    },
  },
})

const MoviesScene = ({ classes, movies }) =>
  <div className={classes.root}>
    <div className={classes.grid}>
      {movies.results && movies.results.map(movie =>
        <MovieCard key={movie.id} movie={movie} />)}
    </div>
    <Pages />
  </div>

MoviesScene.propTypes = {
  classes: object.isRequired,
  movies: object.isRequired,
}

export default withStyles(styles)(MoviesScene)

import React from 'react'
import { array, object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import MovieCard from './MovieCard'
import Pages from './Pages'

const styles = theme => ({
  root: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
    },
  },
  title: {
    marginLeft: 100,
    marginBottom: 20,
    color: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  grid: {
    marginTop: 0,
    margin: 90,
    justifyContent: 'center',

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
      margin: 20,
    },

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '280px 280px',
      gridColumnGap: '15px',
      gridRowGap: '30px',
    },

    [theme.breakpoints.down('xs')]: {
      margin: 10,
      marginBottom: 15,

      gridTemplateColumns: '150px 150px',
      gridColumnGap: '10px',
      gridRowGap: '20px',
    },
  },
})

const MoviesScene = ({ classes, movies }) =>
  <div className={classes.root}>
    <Typography variant="h5" className={classes.title}>Latest Release</Typography>
    <div className={classes.grid}>
      {movies.map(movie =>
        <MovieCard key={movie.id} movie={movie} />)}
    </div>
    <Pages />
  </div>


MoviesScene.propTypes = {
  classes: object.isRequired,
  movies: array.isRequired,
}


export default withStyles(styles)(MoviesScene)

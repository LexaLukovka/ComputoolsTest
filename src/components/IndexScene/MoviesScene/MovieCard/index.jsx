import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography/Typography'

const styles = theme => ({
  root: {
    justifyContent: 'stretch',
    height: 500,
    cursor: 'pointer',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 220,
    },
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    opacity: 0,
    height: '100%',

    '&:hover': {
      opacity: 1,
      background: 'rgba(0,0,0,0.7)',
    },
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
  },
})

const url = 'http://image.tmdb.org/t/p/w342'
const MovieCard = ({ classes, movie }) =>
  <Link to={`/movie/${movie.id}`}>
    <Card className={classes.root} style={{ backgroundImage: `url(${url}${movie.poster_path})` }}>
      <div className={classes.card}>
        <Typography
          variant="h4"
          color="primary"
          className={classes.title}
        >
          {movie.title}
        </Typography>
      </div>
    </Card>
  </Link>

MovieCard.propTypes = {
  classes: object.isRequired,
  movie: object.isRequired,
}

export default withStyles(styles)(MovieCard)

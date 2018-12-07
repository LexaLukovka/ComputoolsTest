import React from 'react'
import { object } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import connector from '../../connector'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    marginLeft: 50,
    maxWidth: 1100,
    color: theme.palette.primary.light,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 10,
    },
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  title: {
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 30,
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 10,
    },
  },
  overview: {
    paddingTop: 50,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 30,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 10,
      fontSize: '0.85rem',
      lineHeight: 1.2,
    },
  },
})

class Data extends React.Component {
  handleFavorite = movie => {
    const { actions } = this.props
    actions.movies.favorite(movie)
  }

  render() {
    const { classes, movie } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.flex}>
          <Link to={`/movie/${movie.id}`}>
            <Typography variant="h5" color="secondary" className={classes.title}>{movie.title}</Typography>
          </Link>
          <Button variant="outlined" color="inherit" style={{ width: 120 }} onClick={() => this.handleFavorite(movie)}>
            Unfavorite
          </Button>
        </div>
        <Typography variant="subtitle1" color="secondary" className={classes.overview}>{movie.overview}</Typography>
      </div>
    )
  }
}


Data.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  movie: object.isRequired,
}

export default withStyles(styles)(connector(Data))

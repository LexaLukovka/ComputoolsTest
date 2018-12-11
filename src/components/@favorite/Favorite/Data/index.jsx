import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Typography, withStyles } from '@material-ui/core'
import { inject, observer } from 'mobx-react'

const styles = theme => ({
  root: {
    marginLeft: 50,
    maxWidth: 1000,
    color: theme.palette.primary.dark,
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
      alignSelf: 'flex-start',
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

@inject('moviesStore')
@withStyles(styles)
@observer
export default class Data extends React.Component {
  handleFavorite = movie => {
    const { moviesStore } = this.props
    moviesStore.changeFavorite(movie)
  }

  render() {
    const { classes, movie } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.flex}>
          <Typography variant="h5" color="secondary" className={classes.title}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </Typography>
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
  moviesStore: object,
  movie: object.isRequired,
}


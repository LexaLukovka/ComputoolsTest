import React from 'react'
import { array, object, string } from 'prop-types'
import { withRouter } from 'react-router'
import { Typography, withStyles } from '@material-ui/core'
import KeyboardArrowLeftIcon from 'mdi-react/KeyboardArrowLeftIcon'
import KeyboardArrowRightIcon from 'mdi-react/KeyboardArrowRightIcon'
import { inject, observer } from 'mobx-react'


const styles = theme => ({
  root: {
    color: theme.palette.primary.light,
    opacity: 0.84,
  },
  block: {
    margin: 50,
    display: 'flex',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      margin: 20,
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 10,
      marginTop: 5,
      marginBottom: 0,
    },
  },
  icon: {
    color: 'inherit',
    width: 40,
    height: 40,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 400,
  },

  desktop: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  mobile: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
})

@inject('moviesStore')
@withStyles(styles)
@withRouter
@observer
export default class Arrows extends React.Component {
  handleBack = () => {
    const { moviesStore: { url }, history } = this.props
    history.push(url)
  }

  handleNext = movies => {
    const { movie, history } = this.props
    const index = movies.findIndex(f => f.id === movie.id)
    history.push(`/movie/${movies[index + 1].id}`)
  }

  render() {
    const { classes, moviesStore: { movies: moviesStore, favorite, url }, movie } = this.props
    let movies
    switch (url) {
      case '/favorite': {
        movies = favorite
        break
      }
      default:
        movies = moviesStore.results
    }

    const indexMovie = movies.findIndex(f => f.id === movie.id)
    return (
      <div className={classes.root}>
        <div className="flex">
          <div className={classes.block} onClick={this.handleBack}>
            <KeyboardArrowLeftIcon className={classes.icon} />
            <Typography color="inherit" variant="h6" className={classes.text}>
              <span className={classes.mobile}>Back to list</span>
              <span className={classes.desktop}>Back</span>
            </Typography>
          </div>
          {indexMovie !== (movies.length - 1) && indexMovie >= 0 &&
          <div className={classes.block} onClick={() => this.handleNext(movies)}>
            <Typography color="inherit" variant="h6" className={classes.text}>
              <span className={classes.mobile}>Next Movie</span>
              <span className={classes.desktop}>Next</span>
            </Typography>
            <KeyboardArrowRightIcon className={classes.icon} />
          </div>}
        </div>
      </div>
    )
  }
}


Arrows.propTypes = {
  classes: object,
  history: object,
  moviesStore: object,
  movie: object,
}


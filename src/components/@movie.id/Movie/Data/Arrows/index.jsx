import React from 'react'
import { array, object } from 'prop-types'
import { withRouter } from 'react-router'
import { Typography, withStyles } from '@material-ui/core'
import KeyboardArrowLeftIcon from 'mdi-react/KeyboardArrowLeftIcon'
import KeyboardArrowRightIcon from 'mdi-react/KeyboardArrowRightIcon'
import connector from './connector'


const styles = theme => ({
  root: {
    color: theme.palette.primary.light,
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
      marginTop: 0,
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

class Arrows extends React.Component {
  handleBack = () => {
    const { history } = this.props
    history.goBack()
  }

  handleNext = () => {
    const { movies, movie, history } = this.props
    const index = movies.findIndex(f => f.id === movie.id)
    history.push(`/movie/${movies[index + 1].id}`)
  }

  render() {
    const { classes, movies, movie } = this.props
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
          <div className={classes.block} onClick={this.handleNext}>
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
  classes: object.isRequired,
  history: object.isRequired,
  movies: array.isRequired,
  movie: object.isRequired,
}

export default withStyles(styles)(withRouter(connector(Arrows)))

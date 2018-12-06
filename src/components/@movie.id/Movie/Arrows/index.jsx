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
  },
  icon: {
    color: 'inherit',
    width: 40,
    height: 40,
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
    return (
      <div className={classes.root}>
        <div className="flex">
          <div className={classes.block} onClick={this.handleBack}>
            <KeyboardArrowLeftIcon className={classes.icon} />
            <Typography color="inherit" variant="h5" style={{ alignSelf: 'center' }}>Back to list</Typography>
          </div>
          {movies.findIndex(f => f.id === movie.id) !== (movies.length - 1) &&
          <div className={classes.block} onClick={this.handleNext}>
            <Typography color="inherit" variant="h5" style={{ alignSelf: 'center' }}>Next Movie</Typography>
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

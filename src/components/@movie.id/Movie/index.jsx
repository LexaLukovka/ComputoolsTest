import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import connector from '../connector'
import Data from './Data'

const styles = () => ({
  root: {
    height: '100%',
  },
  background: {
    zIndex: 1,
    position: 'fixed',
    filter: 'blur(30px)',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat-y',
    backgroundAttachment: 'fixed',
    '-webkit-filter': 'blur(30px)',
  },
  container: {
    zIndex: 2,
    width: '100%',
    height: '100%',
    position: 'fixed',
  },
})

class Movie extends React.Component {
  componentDidMount() {
    const { movie } = this.props
    document.title = movie.title
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }


  render() {
    const { classes, movie } = this.props
    const url = 'http://image.tmdb.org/t/p/w342'
    return (
      <div className={classes.root}>
        <div
          className={classes.background}
          style={{ width: '100%', height: '100%', backgroundImage: `url(${url}${movie.poster_path})` }}
        />
        <div className={classes.container}>
          <Data movie={movie} url={url} />
        </div>
      </div>
    )
  }
}

Movie.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  movie: object.isRequired,
}

export default withStyles(styles)(connector(Movie))

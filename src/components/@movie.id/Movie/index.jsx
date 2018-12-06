import React from 'react'
import { array, bool, func, node, object, shape, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import connector from '../connector'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import Data from 'components/@movie.id/Movie/Data'

const styles = {
  root: {
    height: '100%',
  },
  background: {
    zIndex: 1,
    position: 'fixed',
    filter: 'blur(20px)',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    '-webkit-filter': 'blur(30px)',
  },
  container: {
    zIndex: 2,
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'fixed',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 342,
    height: 500,
    borderRadius: 0,
    alignSelf: 'center',
  },
}

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
          <Avatar className={classes.image} src={`${url}${movie.poster_path}`} />
          <Data movie={movie} />
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

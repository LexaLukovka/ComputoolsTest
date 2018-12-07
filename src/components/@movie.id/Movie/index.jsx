import React from 'react'
import { object } from 'prop-types'
import { Avatar, withStyles } from '@material-ui/core'
import Data from './Data'
import Arrows from './Arrows'
import connector from '../connector'

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
    position: 'fixed',
  },
  flex: {
    height: '100%',
    paddingBottom: 220,
    display: 'flex',
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
          <Arrows movie={movie} />
          <div className={classes.flex}>
            <Avatar className={classes.image} src={`${url}${movie.poster_path}`} />
            <Data movie={movie} />
          </div>
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

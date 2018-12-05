import React from 'react'
import { array, bool, func, node, object, shape, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import connector from '../connector'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import Data from 'components/@movie.id/Movie/Data'

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  image: {
    alignSelf: 'center',
    width: 342,
    height: 500,
    borderRadius: 0,
  },
}

class Movie extends React.Component {
  componentDidMount() {
    const { actions, movie } = this.props
    const url = 'http://image.tmdb.org/t/p/w342'

    document.title = movie.title

    actions.layout.background(`${url}${movie.poster_path}`)
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
        <Avatar className={classes.image} src={`${url}${movie.poster_path}`} />
        <Data movie={movie} />
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

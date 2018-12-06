import React from 'react'
import { array, bool, func, node, object, shape, string } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import connector from '../../connector'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    marginLeft: 50,
    maxWidth: 1100,
    color: theme.palette.primary.light,
  },
  overview: {
    paddingTop: 30,
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
        <div className="flex">
          <Link to={`/movie/${movie.id}`}>
            <Typography variant="h5" color="secondary">{movie.title}</Typography>
          </Link>
          <Button variant="outlined" color="inherit" onClick={() => this.handleFavorite(movie)}>
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

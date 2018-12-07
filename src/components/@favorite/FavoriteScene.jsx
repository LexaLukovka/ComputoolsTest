import React from 'react'
import { array, object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Favorite from 'components/@favorite/Favorite'
import NotFound from 'components/NotFound'
import isEmpty from 'lodash/isEmpty'
import connector from './connector'

const styles = theme => ({
  root: {
    margin: 50,
    [theme.breakpoints.down('xs')]: {
      margin: 10,
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginLeft: 50,
    marginBottom: 20,
    color: theme.palette.primary.dark,
  },
})

class FavoriteScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props
    actions.movies.url(match.url)
  }

  render() {
    const { classes, favorite } = this.props
    if (isEmpty(favorite)) return <NotFound />

    return <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h5" className={classes.title}>My favorite</Typography>
        {favorite.map(movie => <Favorite key={movie.id} movie={movie} />)}
      </div>
    </div>
  }
}


FavoriteScene.propTypes = {
  actions: object.isRequired,
  match: object.isRequired,
  classes: object.isRequired,
  favorite: array.isRequired,
}

export default withStyles(styles)(connector(FavoriteScene))

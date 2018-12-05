import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import connector from './connector'
import Loading from '../Loading'
import MoviesScene from './MoviesScene'

const styles = theme => ({
  card: {
    padding: 20,
    height: '100%',
    background: 'rgba(255, 255, 255, 0.7)',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%',
    },
  },
})

class IndexScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    document.title = 'Computools'
    actions.movies.load()
  }

  // componentWillUnmount() {
  // actions.layout.background('/images/.jpg')
  // const { actions } = this.props
  // actions.layout.removeBackground()
  // }

  render() {
    const { classes, movies } = this.props
    return movies.loading ? <Loading /> : <MoviesScene movies={movies.movies} />
  }
}

IndexScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  movies: object.isRequired,
}

export default withStyles(styles)(connector(IndexScene))

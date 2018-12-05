import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import connector from './connector'
import Movie from './Movie'

const styles = () => ({
  root: {
    height: '100%',
  },
})

class MovieScene extends React.Component {
  componentWillMount() {
    const { actions, match } = this.props
    actions.movies.find(match.params.id)
  }

  render() {
    const { classes, movie } = this.props
    return <div className={classes.root}>
      <Movie movie={movie} />
    </div>
  }
}

MovieScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
  movie: object.isRequired,
}

export default withStyles(styles)(connector(MovieScene))

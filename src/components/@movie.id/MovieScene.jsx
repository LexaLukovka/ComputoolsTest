import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import connector from './connector'
import Movie from './Movie'
import NotFound from 'components/NotFound'
import isEmpty from 'lodash/isEmpty'

const styles = () => ({
  root: {
    height: '100%',
  },
})

class MovieScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props
    actions.movies.find(match.params.id)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { actions, match } = this.props
    if (prevProps.match.params.id !== match.params.id) {
      actions.movies.find(match.params.id)
    }
  }

  render() {
    const { classes, movie } = this.props
    if (isEmpty(movie)) return <NotFound />

    return <div className={classes.root}>
      <Movie movie={movie} />
    </div>
  }
}

MovieScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
  movie: object,
}

MovieScene.defaultProps = {
  movie: null,
}

export default withStyles(styles)(connector(MovieScene))

import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Movie from './Movie'
import NotFound from 'components/NotFound'
import isEmpty from 'lodash/isEmpty'
import { inject, observer } from 'mobx-react'

const styles = () => ({
  root: {
    height: '100%',
  },
})

@inject('moviesStore')
@withStyles(styles)
@observer
export default class MovieScene extends React.Component {
  componentDidMount() {
    const { moviesStore, match } = this.props
    moviesStore.find(match.params.id)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { moviesStore, match } = this.props
    if (prevProps.match.params.id !== match.params.id) {
      moviesStore.find(match.params.id)
    }
  }

  render() {
    const { classes, moviesStore: { current } } = this.props
    if (isEmpty(current)) return <NotFound />

    return <div className={classes.root}>
      <Movie movie={current} />
    </div>
  }
}

MovieScene.propTypes = {
  classes: object,
  moviesStore: object,
  match: object,
}

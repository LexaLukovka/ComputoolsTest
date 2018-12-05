import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import connector from './connector'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 30,
  },
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
    // actions.layout.background('/images/.jpg')

    document.title = 'Computools'

  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        Computools
      </div>
    )
  }
}

IndexScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(IndexScene))

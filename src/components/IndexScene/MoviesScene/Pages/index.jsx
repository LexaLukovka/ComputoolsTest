import React from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Button, withStyles } from '@material-ui/core'

import { inject, observer } from 'mobx-react'

const styles = theme => ({
  root: {
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.primary.dark,
  },
  button: {
    color: 'inherit',
    borderRadius: 0,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      minWidth: 45,
    },
  },
  buttonCurrent: {
    borderRadius: 0,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      minWidth: 45,
    },
  },
  first: {
    borderRadius: '4px 0 0 4px',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      minWidth: 45,
    },
  },
  last: {
    borderRadius: '0 4px 4px 0',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      minWidth: 45,
    },
  },
})


@inject('moviesStore')
@withStyles(styles)
@withRouter
@observer
export default class Pages extends React.Component {
  goToUrl = url => () => {
    const { history } = this.props
    history.push(`/movies/${url}`)
  }


  render() {
    const { match, classes, moviesStore: { pages } } = this.props
    const currentPage = +match.params.page

    return (
      <div className={classes.root}>

        <Button
          variant="outlined"
          className={classes.first}
          disabled={currentPage <= 1}
          onClick={this.goToUrl(1)}
        >
          First
        </Button>

        <Button
          color="inherit"
          variant="outlined"
          className={classes.button}
          disabled={currentPage <= 1}
          onClick={this.goToUrl(currentPage - 1)}
        >
          Prev
        </Button>

        {currentPage > 1 &&
        <Button
          variant="outlined"
          className={classes.button}
          onClick={this.goToUrl(currentPage - 1)}
        >
          {currentPage - 1}
        </Button>}

        <Button color="primary" variant="outlined" className={classes.buttonCurrent}>{currentPage}</Button>

        {currentPage < pages &&
        <Button
          variant="outlined"
          className={classes.button}
          onClick={this.goToUrl(currentPage + 1)}
        >
          {currentPage + 1}
        </Button>}
        {currentPage < pages &&
        <Button
          variant="outlined"
          color="inherit"
          className={classes.button}
          onClick={this.goToUrl(currentPage + 1)}
        >
          Next
        </Button>}

        {currentPage < pages &&
        <Button
          variant="outlined"
          className={classes.last}
          onClick={this.goToUrl(pages)}
        >
          Last
        </Button>}

      </div>
    )
  }
}


Pages.propTypes = {
  classes: object.isRequired,
  history: object.isRequired,
  match: object.isRequired,
  moviesStore: object,
}

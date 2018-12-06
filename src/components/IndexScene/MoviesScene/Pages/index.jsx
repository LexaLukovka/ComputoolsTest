import React from 'react'
import { number, object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import connector from './connector'

const styles = theme => ({
  root: {
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    color: theme.palette.primary.dark,
    borderRadius: 0,
  },
  buttonCurrent: {
    borderRadius: 0,
  },
  first: {
    borderRadius: '4px 0 0 4px',
    color: theme.palette.primary.main,
  },
  last: {
    borderRadius: '0 4px 4px 0',
    color: theme.palette.primary.main,
  },
})

class Pages extends React.Component {
  handlePage = (page) => {
    const { actions } = this.props
    actions.movies.changePage(page)
  }

  render() {
    const { classes, currentPage, pages } = this.props
    return (
      <div className={classes.root}>
        {currentPage - 1 > 0 &&
        <Button
          variant="outlined"
          className={classes.first}
          onClick={() => this.handlePage(1)}
        >
          First
        </Button>}
        {currentPage - 1 > 0 &&
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => this.handlePage(currentPage - 1)}
        >
          Prev
        </Button>}
        {currentPage - 1 > 0 &&
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => this.handlePage(currentPage - 1)}
        >
          {currentPage - 1}
        </Button>}

        <Button
          color="primary"
          variant="outlined"
          className={classes.buttonCurrent}
          onClick={() => this.handlePage(currentPage)}
        >
          {currentPage}
        </Button>

        {currentPage < pages &&
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => this.handlePage(currentPage + 1)}
        >
          {currentPage + 1}
        </Button>}
        {currentPage < pages &&
        <Button
          color="secondary"
          variant="outlined"
          className={classes.button}
          onClick={() => this.handlePage(currentPage + 1)}
        >
          Next
        </Button>}
        {currentPage < pages &&
        <Button
          variant="outlined"
          className={classes.last}
          onClick={() => this.handlePage(pages)}
        >
          Last
        </Button>}
      </div>
    )
  }
}

Pages.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  currentPage: number.isRequired,
  pages: number.isRequired,
}

export default withStyles(styles)(connector(Pages))

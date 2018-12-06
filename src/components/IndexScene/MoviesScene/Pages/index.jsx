import React from 'react'
import { number, object } from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
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


const Pages = ({ match, classes, pages }) => {
  const currentPage = +match.params.page

  return (
    <div className={classes.root}>
      {currentPage > 1 &&
      <Link to={`/movies/${1}`}>
        <Button variant="outlined" className={classes.first}>First</Button>
      </Link>}

      {currentPage > 1 &&
      <Link to={`/movies/${currentPage - 1}`}>
        <Button variant="outlined" className={classes.button}>Prev</Button>
      </Link>}
      {currentPage > 1 &&
      <Link to={`/movies/${currentPage - 1}`}>
        <Button variant="outlined" className={classes.button}>{currentPage - 1}</Button>
      </Link>}

      <Button color="primary" variant="outlined" className={classes.buttonCurrent}>{currentPage}</Button>

      {currentPage < pages &&
      <Link to={`/movies/${currentPage + 1}`}>
        <Button variant="outlined" className={classes.button}>{currentPage + 1}</Button>
      </Link>}
      {currentPage < pages &&
      <Link to={`/movies/${currentPage + 1}`}>
        <Button variant="outlined" className={classes.button}>Next</Button>
      </Link>}

      {currentPage < pages &&
      <Link to={`/movies/${pages}`}>
        <Button variant="outlined" className={classes.last}>Last</Button>
      </Link>}
    </div>
  )
}

Pages.propTypes = {
  classes: object.isRequired,
  match: object.isRequired,
  pages: number.isRequired,
}

export default withStyles(styles)(connector(withRouter(Pages)))

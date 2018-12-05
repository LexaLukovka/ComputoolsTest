import React from 'react'
import { number, object, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/es/Typography/Typography'

const styles = {
  root: {
    display: 'flex',
    marginTop: 20,
    marginBottom: 50,
  },
  data: {
    margin: 10,
  },
}

const Rating = ({ classes, score, rating, release }) =>
  <div className={classes.root}>
    <Typography color="inherit" className={classes.data}>Score: {score}</Typography>
    <Typography color="inherit" className={classes.data}>Rating: {rating}</Typography>
    <Typography color="inherit" className={classes.data}>Release Date: {release}</Typography>
  </div>

Rating.propTypes = {
  classes: object.isRequired,
  score: number.isRequired,
  rating: number.isRequired,
  release: string.isRequired,
}

export default withStyles(styles)(Rating)

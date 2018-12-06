import React from 'react'
import { number, object, string } from 'prop-types'
import { Divider, withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/es/Typography/Typography'

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: 20,
  },
  data: {
    margin: 10,
  },
  divider: {
    width: 3,
    height: 20,
    opacity: 0.1,
    borderRadius: 10,
    alignSelf: 'center',
    transform: 'rotate(90)',
    background: theme.palette.primary.light,
  },
})

const Rating = ({ classes, score, rating, release }) =>
  <div className={classes.root}>
    <Typography color="inherit" variant="subtitle1" className={classes.data}>Score: {score}</Typography>
    <Divider className={classes.divider} />
    <Typography color="inherit" variant="subtitle1" className={classes.data}>Rating: {rating}</Typography>
    <Divider className={classes.divider} />
    <Typography color="inherit" variant="subtitle1" className={classes.data}>Release Date: {release}</Typography>
  </div>

Rating.propTypes = {
  classes: object.isRequired,
  score: number.isRequired,
  rating: number.isRequired,
  release: string.isRequired,
}

export default withStyles(styles)(Rating)

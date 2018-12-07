import React from 'react'
import { number, object, string } from 'prop-types'
import { Divider, withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/es/Typography/Typography'

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: 5,
    },
  },
  data: {
    margin: 10,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  divider: {
    width: 3,
    height: 20,
    opacity: 0.1,
    borderRadius: 10,
    alignSelf: 'center',
    background: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
})

const Rating = ({ classes, score, rating, release }) =>
  <div className={classes.root}>
    <Typography color="inherit" variant="subtitle1" className={classes.data}>Score: {score}</Typography>
    <Divider className={classes.divider} />
    <Typography color="inherit" variant="subtitle1" className={classes.data}>Rating: {rating}</Typography>
    <Divider className={classes.divider} />
    <Typography color="inherit" variant="subtitle1" className={classes.data}>
      <span>Release Date:&nbsp;</span> <span>{release}</span>
    </Typography>
  </div>

Rating.propTypes = {
  classes: object.isRequired,
  score: number.isRequired,
  rating: number.isRequired,
  release: string.isRequired,
}

export default withStyles(styles)(Rating)

import React from 'react'
import { number, object, string } from 'prop-types'
import { Divider, withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/es/Typography/Typography'

const styles = theme => ({
  root: {
    color: theme.palette.primary.light,
    display: 'flex',
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      marginTop: 5,
    },
  },
  label: {
    opacity: 0.8,
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'flex-start',
    },
  },
  value: {
    color: 'white',
    fontSize: '1rem',
  },
  data: {
    margin: 10,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      marginTop: 0,
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
    <div className={classes.data}>
      <Typography color="inherit" variant="subtitle1" className={classes.label}>Score: &nbsp;</Typography>
      <Typography className={classes.value} variant="subtitle1">{score}</Typography>
    </div>
    <Divider className={classes.divider} />
    <div className={classes.data}>
      <Typography color="inherit" variant="subtitle1" className={classes.label}>Rating: &nbsp;</Typography>
      <Typography className={classes.value} variant="subtitle1">{rating}</Typography>
    </div>
    <Divider className={classes.divider} />
    <div className={classes.data}>
      <Typography color="inherit" variant="subtitle1" className={classes.label}>Release Date: &nbsp;</Typography>
      <Typography className={classes.value} variant="subtitle1">{release}</Typography>
    </div>
  </div>

Rating.propTypes = {
  classes: object.isRequired,
  score: number.isRequired,
  rating: number.isRequired,
  release: string.isRequired,
}

export default withStyles(styles)(Rating)

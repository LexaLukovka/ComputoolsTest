import React from 'react'
import { object } from 'prop-types'
import { Divider, Typography, withStyles } from '@material-ui/core'
import connector from '../../../connector'

const styles = theme => ({
  root: {
    maxWidth: 700,
    marginBottom: 30,
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
    },
  },
  divider: {
    height: 3,
    opacity: 0.1,
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 10,
    background: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
      marginBottom: 20,
      height: 2,
    },
    '@media screen and (max-width: 320px)': {
      marginTop: 10,
      marginBottom: 10,
    },
  },
  title: {
    '@media screen and (max-width: 320px)': {
      fontSize: '1.5rem',
    },
  },
  overview: {
    marginTop: 20,
  },
  desktop: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
})

const Description = ({ classes, movie }) =>
  <div className={classes.root}>
    <div className={classes.desktop}>
      <Typography color="inherit" variant="h4" className={classes.title}>{movie.title}</Typography>
    </div>
    <div className={classes.overview}>
      <Divider className={classes.divider} />
      <Typography color="inherit" style={{ fontSize: '0.84rem' }}>{movie.overview}</Typography>
      <Divider className={classes.divider} />
    </div>
  </div>


Description.propTypes = {
  classes: object.isRequired,
  movie: object.isRequired,
}


export default withStyles(styles)(connector(Description))

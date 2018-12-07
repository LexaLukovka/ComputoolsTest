import React from 'react'
import { object } from 'prop-types'
import { Grid, Typography, withStyles } from '@material-ui/core'
import classnames from 'classnames'
import FavoriteButtonAction from './FavoriteButtonAction'
import Rating from './Rating'
import FavoriteIconAction from './FavoriteIconAction'
import Description from '../Description'

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    paddingRight: 40,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      paddingRight: 0,
    },
  },
  button: {
    color: theme.palette.primary.light,
    opacity: 0.8,
  },
  rating: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      height: '100%',
      alignItems: 'stretch',
    },
  },
  iconButton: {
    alignSelf: 'flex-start',
  },

  desktop: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  mobile: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
})

const Evaluation = ({ classes, movie }) =>
  <div className={classes.root}>
    <Grid container justify="flex-end" className={classnames(classes.mobile, classes.button)}>
      <FavoriteButtonAction />
    </Grid>
    <div className={classes.mobile}>
      <Typography color="inherit" variant="h4">{movie.title}</Typography>
    </div>
    <div className={classes.rating}>
      <Rating
        score={movie.vote_count}
        rating={movie.vote_average}
        release={movie.release_date}
      />
      <div className={classnames(classes.desktop, classes.iconButton)}>
        <FavoriteIconAction />
      </div>
    </div>
    <div className={classes.mobile}>
      <Description movie={movie} />
    </div>
  </div>

Evaluation.propTypes = {
  classes: object.isRequired,
  movie: object.isRequired,
}

export default withStyles(styles)(Evaluation)

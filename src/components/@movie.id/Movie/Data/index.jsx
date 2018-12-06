import React from 'react'
import { array, bool, func, node, object, shape, string } from 'prop-types'
import { Button, Divider, Grid, Typography, withStyles } from '@material-ui/core'
import Rating from 'components/@movie.id/Movie/Data/Rating'

const styles = theme => ({
  root: {
    maxWidth: 700,
    color: 'white',
    marginBottom: 30,
    alignSelf: 'center',
  },
  divider: {
    height: 3,
    opacity: 0.1,
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 10,
    background: theme.palette.secondary.light,
  },
  overview: {},
})

const Data = ({ classes, movie }) =>
  <div className={classes.root}>
    <Grid container justify="flex-end">
      <Button color="inherit" variant="outlined">Add favorite</Button>
    </Grid>
    <Typography color="inherit" variant="h4">{movie.title}</Typography>
    <Rating
      score={movie.vote_count}
      rating={movie.vote_average}
      release={movie.release_date}
    />
    <div className={classes.overview}>
      <Divider className={classes.divider} />
      <Typography color="inherit">{movie.overview}</Typography>
      <Divider className={classes.divider} />
    </div>
  </div>

Data.propTypes = {
  classes: object.isRequired,
  movie: object.isRequired,
}

export default withStyles(styles)(Data)

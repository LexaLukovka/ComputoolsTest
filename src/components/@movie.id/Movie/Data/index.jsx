import React from 'react'
import { array, bool, func, node, object, shape, string } from 'prop-types'
import { Button, Grid, Typography, withStyles } from '@material-ui/core'
import Rating from 'components/@movie.id/Movie/Data/Rating'

const styles = {
  root: {
    alignSelf: 'center',
    maxWidth: 700,
    color: 'white',
  },
}

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
    <Typography color="inherit">{movie.overview}</Typography>
  </div>

Data.propTypes = {
  classes: object.isRequired,
  movie: object.isRequired,
}

export default withStyles(styles)(Data)

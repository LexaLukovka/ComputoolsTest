import React from 'react'
import { object } from 'prop-types'
import classnames from 'classnames'
import { Avatar, Grid, Typography, withStyles } from '@material-ui/core'
import Arrows from './Arrows'
import Rating from './Rating'
import Data from './Data'
import FavoriteButtonAction from './FavoriteButtonAction'
import FavoriteIconAction from './FavoriteIconAction'
import connector from '../connector'

const styles = theme => ({
  root: {
    height: '100%',
  },
  background: {
    zIndex: 1,
    position: 'fixed',
    filter: 'blur(20px)',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    '-webkit-filter': 'blur(30px)',
  },
  container: {
    zIndex: 2,
    width: '100%',
    height: '100%',
    position: 'fixed',
  },
  flex: {
    margin: 20,
    width: '100%',
    height: '100%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 220,
  },
  data: {
    margin: 20,
    width: '100%',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  button: {
    color: theme.palette.primary.light,
  },
  dataBlock: {
    marginRight: 40,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
  },
  rating: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
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
  image: {
    width: 342,
    height: 500,
    borderRadius: 0,
    alignSelf: 'center',
    marginRight: 20,
    [theme.breakpoints.down('sm')]: {
      width: 280,
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      width: 150,
      height: '100%',
    },
  },
})

class Movie extends React.Component {
  componentDidMount() {
    const { movie } = this.props
    document.title = movie.title
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }


  render() {
    const { classes, movie } = this.props
    const url = 'http://image.tmdb.org/t/p/w342'
    return (
      <div className={classes.root}>
        <div
          className={classes.background}
          style={{ width: '100%', height: '100%', backgroundImage: `url(${url}${movie.poster_path})` }}
        />
        <div className={classes.container}>
          <Arrows movie={movie} />
          <div className={classes.flex}>
            <div className={classes.data}>
              <div className={classes.row}>
                <Avatar className={classes.image} src={`${url}${movie.poster_path}`} />
                <div className={classes.dataBlock}>
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
                    <Data movie={movie} />
                  </div>
                </div>
              </div>
              <div className={classes.desktop}>
                <Data movie={movie} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Movie.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  movie: object.isRequired,
}

export default withStyles(styles)(connector(Movie))

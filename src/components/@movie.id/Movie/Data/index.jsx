import React from 'react'
import { object, string } from 'prop-types'
import { Avatar, withStyles } from '@material-ui/core'
import Arrows from './Arrows'
import Description from './Description'
import Evaluation from './Evaluation'

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  flex: {
    width: '100%',
    height: 'calc(100vh - 224px)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: 5,
      paddingTop: 10,
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  data: {
    margin: 20,
    width: '100%',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: 10,
    },
    [theme.breakpoints.down('xs')]: {
      alignSelf: 'end',
      margin: '0 10px',
    },
  },
  row: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
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
    },
    '@media screen and (max-width: 320px)': {
      width: 100,
    },
  },

  desktop: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
})

const Data = ({ classes, movie, url }) =>
  <div className={classes.root}>
    <Arrows movie={movie} />

    <div className={classes.flex}>
      <div className={classes.data}>
        <div className={classes.row}>
          <Avatar className={classes.image} src={`${url}${movie.poster_path}`} />
          <div>
            <Evaluation movie={movie} />
          </div>
        </div>
        <div className={classes.desktop}>
          <Description movie={movie} />
        </div>
      </div>
    </div>
  </div>

Data.propTypes = {
  classes: object.isRequired,
  movie: object.isRequired,
  url: string.isRequired,
}

export default withStyles(styles)(Data)

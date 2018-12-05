import React from 'react'
import { object } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import Typography from '@material-ui/core/es/Typography/Typography'

const styles = {
  root: {
    justifyContent: 'stretch',
  },
  card: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    '&:hover': {
      opacity: 0.5,
    },
  },
  title: {
    position: 'absolute',
  },
}


class MovieCard extends React.Component {
  state = {
    visibility: null,
  }

  onMouseOver = (taskId) => {
    this.setState({
      visibility: taskId,
    })
  }

  onMouseLeave = () => {
    this.setState({
      visibility: null,
    })
  }

  render() {
    const { classes, movie } = this.props
    const { visibility } = this.state
    const url = 'http://image.tmdb.org/t/p/w342'

    return (
      <div className={classes.root}>
        {movie.id === visibility &&
        <Typography
          variant="h6"
          align="center"
          color="primary"
          className={classes.title}
        >
          {movie.title}
        </Typography>}
        <Card
          className={classes.card}
          onMouseLeave={this.onMouseLeave}
          onMouseOver={() => this.onMouseOver(movie.id)}
        >
          <Avatar className={classes.image} src={`${url}${movie.poster_path}`} />
        </Card>
      </div>
    )
  }
}


MovieCard.propTypes = {
  classes: object.isRequired,
  movie: object.isRequired,
}

export default withStyles(styles)(MovieCard)

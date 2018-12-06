/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router'
import shortTitle from 'utils/shortTitle'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core'
import connector from './connector'


const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  toolbar: {
    display: 'flex',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
})

class Header extends React.Component {
  goBack = url => () => {
    const { history } = this.props
    if (url) return history.push(url)
    return history.goBack()
  }

  render() {
    const { classes, header } = this.props
    return (
      <header className={classes.root}>
        <AppBar color="secondary" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>

            <Typography variant="h6" color="inherit" className={classes.title}>
              <Link to={header.link}>{shortTitle(header.title)}</Link>
            </Typography>

            <Typography variant="h6" color="inherit" className={classes.title}>
              <Link to="/favorite">Favorite</Link>
            </Typography>


          </Toolbar>
        </AppBar>
      </header>
    )
  }
}

Header.propTypes = {
  classes: object.isRequired,
  header: object.isRequired,
  history: object.isRequired,
}

export default withStyles(styles)(connector(withRouter(Header)))

/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { bool, object, shape, string } from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { AppBar, Button, Menu, MenuItem, Toolbar, Typography, withStyles } from '@material-ui/core'
import KeyboardArrowDownIcon from 'mdi-react/KeyboardArrowDownIcon'
import StarsIcon from 'mdi-react/StarsIcon'
import { inject, observer } from 'mobx-react'


const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  flex: {
    display: 'flex',
  },
  appBar: {
    padding: 10,
  },
  select: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 30,
    color: theme.palette.primary.dark,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
  icon: {
    width: 30,
    height: 30,
    color: 'inherit',
    marginRight: 5,
  },
  menuItem: {
    width: '100%',
  },
  iconButton: {
    color: 'white',
    width: 35,
    height: 35,
    marginLeft: 10,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  button: {
    color: theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      minWidth: 50,
    },
  },

  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
})


@inject('moviesStore')
@observer
@withStyles(styles)
@withRouter
export default class Header extends React.Component {
  state = {
    anchorEl: null,
    url: this.props.moviesStore && this.props.moviesStore.url,
    scene: this.props.moviesStore && this.props.moviesStore.url === '/favorite' ? 'Favorite' : 'My Account',
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.moviesStore.url !== this.props.moviesStore.url) {
      this.setState({
        url: nextProps.moviesStore.url,
        scene: nextProps.moviesStore.url === '/favorite' ? 'Favorite' : 'My Account',
      })
    }
  }

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleGo = url => {
    this.setState({
      url,
      scene: url === '/favorite' ? 'Favorite' : 'My Account',
      anchorEl: null,
    })

    if (this.props.history.location.pathname.substring(0, 7) === '/movie/' || this.state.url !== url) {
      this.props.history.push(url)
    }
  }

  render() {
    const { classes } = this.props
    const { anchorEl, scene } = this.state

    return (
      <header className={classes.root}>
        <AppBar color="secondary" className={classes.appBar}>
          <Toolbar className="flex">

            <div className={classes.flex}>
              <Link to="/" style={{ alignSelf: 'center' }}><StarsIcon className={classes.icon} /></Link>
              <Typography variant="h5" color="inherit" className={classes.title}>
                <Link to="/">Movies</Link>
              </Typography>
            </div>

            <div>
              <Button
                variant="outlined"
                className={classes.button}
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleOpen}
              >
                <span className={classes.desktop}>{scene}</span>
                <KeyboardArrowDownIcon className={classes.iconButton} />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem className={classes.menuItem} onClick={() => this.handleGo('/')}>My Account</MenuItem>
                <MenuItem className={classes.menuItem} onClick={() => this.handleGo('/favorite')}>Favorite</MenuItem>
              </Menu>
            </div>

          </Toolbar>
        </AppBar>
      </header>
    )
  }
}

Header.propTypes = {
  classes: object.isRequired,
  history: object.isRequired,
  moviesStore: shape({
    url: string,
  }),
}

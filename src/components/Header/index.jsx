/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object, string } from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { AppBar, MenuItem, OutlinedInput, Select, Toolbar, Typography, withStyles } from '@material-ui/core'
import StarsIcon from 'mdi-react/StarsIcon'
import shortTitle from 'utils/shortTitle'
import connector from './connector'


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
})

class Header extends React.Component {
  state = {
    url: this.props.url,
    scene: this.props.url === '/favorite' ? 'favorite' : 'movies',
    target: null,
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleGo = url => {
    this.setState({ url })
    if (this.state.url !== url) this.props.history.push(url)
  }

  render() {
    const { classes, header } = this.props
    const { scene } = this.state

    return (
      <header className={classes.root}>
        <AppBar color="secondary" className={classes.appBar}>
          <Toolbar className="flex">

            <div className={classes.flex}>
              <Link to={header.link} style={{ alignSelf: 'center' }}><StarsIcon className={classes.icon} /></Link>
              <Typography variant="h5" color="inherit" className={classes.title}>
                <Link to={header.link}>{shortTitle(header.title)}</Link>
              </Typography>
            </div>

            <Select
              error
              value={scene}
              onChange={this.handleChange}
              input={<OutlinedInput
                inputProps={{ className: classes.select }}
                labelWidth={0}
                name="scene"
                id="outlined-scene-simple"
              />}
            >
              <MenuItem value="movies">
                <Typography
                  style={{ width: '100%' }}
                  variant="subtitle1"
                  color="inherit"
                  onClick={() => this.handleGo('/')}
                >
                  My account
                </Typography>

              </MenuItem>
              <MenuItem value="favorite">
                <Typography
                  style={{ width: '100%' }}
                  variant="subtitle1"
                  color="inherit"
                  onClick={() => this.handleGo('/favorite')}
                >
                  Favorite
                </Typography>
              </MenuItem>
            </Select>

          </Toolbar>
        </AppBar>
      </header>
    )
  }
}

Header.propTypes = {
  classes: object.isRequired,
  history: object.isRequired,
  header: object.isRequired,
  url: string.isRequired,
}

export default withStyles(styles)(connector(withRouter(Header)))

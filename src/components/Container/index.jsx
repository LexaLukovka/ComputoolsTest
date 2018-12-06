import React from 'react'
import { node, object, string } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    width: '100%',
    height: '100%',
  },
})

const Container = ({ children, className, classes }) =>
  <main className={`${classes.root} ${className}`}>
    {children}
  </main>

Container.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  className: string,
}
Container.defaultProps = {
  className: '',
}

export default withStyles(styles)(Container)

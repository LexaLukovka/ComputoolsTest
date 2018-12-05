import React, { Component } from 'react'
import { node, object } from 'prop-types'
import connector from './connector'


class Background extends Component {
  componentDidUpdate() {
    const { layout } = this.props
    if (layout.background) {
      document.body.style.background = ''
      document.body.style.backgroundImage = `url(${layout.background})`
      document.body.style.backgroundRepeat = 'no-repeat'
      document.body.style.backgroundAttachment = 'fixed'
      document.body.style.backgroundPosition = 'center'
    } else {
      document.body.style.backgroundImage = ''
      document.body.style.background = '#f2f3f5'
    }
  }

  render() {
    return this.props.children
  }
}

Background.propTypes = {
  layout: object.isRequired,
  children: node.isRequired,
}

export default connector(Background)

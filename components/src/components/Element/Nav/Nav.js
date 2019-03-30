// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

export const Nav = (props: PropTypes.node) => (<BaseContainer as="Nav" {...props} />)

Nav.propTypes = {
    children: PropTypes.node.isRequired
}
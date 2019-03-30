// @flow
import React from 'react'  //8.5k (gzipped: 3.4k)
import {BaseContainer} from '../BaseContainer'
import PropTypes from 'prop-types'

export const Address = (props: PropTypes.node) => (<BaseContainer as="address" {...props}/>)

Address.propTypes = {
    children: PropTypes.node.isRequired
}
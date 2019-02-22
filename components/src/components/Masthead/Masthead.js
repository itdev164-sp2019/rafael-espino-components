import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import styled from 'styled-components'
import { Link } from 'rebass'

const Outer = styled(Box)`
height: ${props => props.height};
with: 100%;
backgroung-color: rebeccapurple;
margin-botto: 1.45rem;
`

export const Masthead = ({ height, siteTitle}) => {
    return ( 
        <Outer height={height}>
        <Link
        href="/"
        style={{
            color: `white`,
            textDecoration: `none`
        }}
        >
        {siteTitle}
        </Link>
        </Outer>
    )
}

Masthead.prototype = {
    height: PropTypes.string.isRequired,
    siteTitle: PropTypes.string
}

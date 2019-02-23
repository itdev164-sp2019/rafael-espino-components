import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import styled from 'styled-components'
import { Link } from 'rebass'

const Outer = styled(Box)`
height: ${props => props.height};
width: 100%;
background-color: rebeccapurple;
margin-bottom: 1.45rem;
`
const styledLink = styled(Link)`
color: white;
text-decoration: none;
`

export const Masthead = ({ height, siteTitle}) => {
    return ( 
        <Outer height={height}>
        <styledLink href="/">{siteTitle}</styledLink>
        </Outer>
    )
}

Masthead.prototypes = {
    height: PropTypes.string.isRequired,
    siteTitle: PropTypes.string
}

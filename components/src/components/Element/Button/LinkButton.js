// @flow
import React from 'react'     // 8.5k (gzipped: 3.4k)
import PropTypes from 'prop-types' //1.6k (gzipped: 838)
import {ButtonBase} from './ButtonBase'    //15.3k (gzipped: 4.7k)
import styled from 'styled-components'

const StyledButton = styled(ButtonBase)`
${props => props.theme.variants.LinkButton[props.variants || 'primary']};
`

export const LinkButton = (props: PropTypes.node) => (<StyledButton {...props}/>)

LinkButton.prototype = { 
    variant: PropTypes.string
}

import React from 'react'    
import PropTypes from 'prop-types' 
import {ButtonBase} from './ButtonBase'    
import styled from 'styled-components'

const StyledButton = styled(ButtonBase)`
${props => props.theme.variants.button[props.variants || 'primary']};
`

export const Button = props => <StyledButton {...props} />

Button.PropTypes = {
    variant: PropTypes.string
}
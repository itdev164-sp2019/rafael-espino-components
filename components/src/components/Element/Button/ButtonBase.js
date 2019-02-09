import React from 'react'     // 8.5k (gzipped: 3.4k)
import PropTypes from 'prop-types' //1.6k (gzipped: 838)
import {Button} from 'rebass'    //15.3k (gzipped: 4.7k)
import styled from 'styled-components'

const Reset = styled(Button)`
background: none;
box-shadow: none;
font-weight: normal;
border-radius: 0;
cursor: pointer;
`
export const ButtonBase = ({children, ...props}) => (
    <Reset {...props}>{children}</Reset>
)

Button.propTypes = {
    children: PropTypes.node.isRequired
}
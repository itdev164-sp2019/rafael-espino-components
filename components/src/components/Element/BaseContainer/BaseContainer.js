
import React from 'react'     // 8.5k (gzipped: 3.4k)
import PropTypes from 'prop-types' //1.6k (gzipped: 838)
import {Flex, Box} from 'rebass'    //15.3k (gzipped: 4.7k)

export const BaseContainer = ({ children, flex, ...props}) => {
    if (flex) {
        return (
            <Flex{...props} className={props.className}>
            {children}
            </Flex>
        )
    } else {
        return (
            <Box {...props} className={props.className}>
            {children}
            </Box>
        )
    }
}

BaseContainer.propTypes = {
    flex: PropTypes.bool,
    children: PropTypes.node.isRequired
}
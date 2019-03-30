// @flow
import * as React from 'react'     // 8.5k (gzipped: 3.4k)
import PropTypes from 'prop-types' //1.6k (gzipped: 838)
import {Flex, Box} from 'rebass'    //15.3k (gzipped: 4.7k)

export function BaseContainer({ 
    children,
    flex,
    className,
    ...props
    }:  {
     children: React.Node,
     flex: boolean,
     className: string,
     props: any
    }) {
    if (flex) {
        return (
            <Flex{...props} className={className}>
            {children}
            </Flex>
        )
    } else {
        return (
            <Box {...props} className={className}>
            {children}
            </Box>
        )
    }
}

BaseContainer.propTypes = {
    flex: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}
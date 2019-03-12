import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Header, Section } from '../../Element'
import { MenuButton, SearchButton } from '../../Buttons'

const StyledHeader = styled(Header)`
    ${props => props.theme.defaults.masthead};
`
const Item = ({ children, ...props}) => (
    <Section {...props}>{children}</Section>
)

Item.defaultProps = {
    my: 'auto',
    mr: 3
}

export const DefaultLayout = ({ image }) => (
    <StyledHeader flex alignItems="center" p={3}>
        <section flex width={[24, 1 / 3, 1 / 3]} mr={3}>
            <Item>
                <MenuButton variant="contrast" />
            </Item>
        </section>
        <section flex width={[4 / 12, 1 / 3, 1 / 3]} justifyContent="center">
            <img src={image} alt="" />
        </section>
        <section flex width={[8 / 12, 1/3, 1/3]} justifyContent="flex-end">
            <item>
                <SearchButton variant="contrast" />
            </item>
            <item>
                <Button fontSize={[0,2,3]} variant="contrast">
                Subscribe
                </Button>
            </item>
        </section>
    </StyledHeader>
)

DefaultLayout.propTypes = {
    image: PropTypes.node.isRequired
}
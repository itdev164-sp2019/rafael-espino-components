import React from 'react'
import mastheadImage from "./images/styled-components.png"
import { menu, search, Search} from 'styled-icons/feather'

const images = {
    mastheadImage
}

const icons = {
    Menu: <Menu />,
    Search: <Search />
}

const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    lineHeight: {
        solid: 1,
        title: 1.25,
        copy: 1.5
    },
    letterSpacing: {
        normal: 'normal',
        tracked: '0.1em',
        tight: '-0.05em',
        mega: '0.25em'
    },
    borders: [
        0,
        '1px solid',
        '2px solid',
        '3px solid',
        '4px solid',
        '8px solid',
        '16px solid',
        '32px solid',
    ],
colors: {
    primary:{
        light: 'hsl(208, 13%, 35%)',
        main: 'hsl(208, 13%, 25%)',
        dark: 'hsl(208, 13%, 15%)',
        contrasText: '#ffffff'
    },
    Text: {
        primary: 'hsl(208, 13%, 15%)',
        secondary: 'hsl(208, 13%, 45%)',
        disabled: 'hsl(208, 13%, 75%)',
        hint: 'hsl(208, 13%, 75%)',
    }
}

}
const defaults = {
    button: {
        padding: `${theme.space[2] / 16}em ${(theme.space[3] + 4) / 16}em`,
        border: theme.borders[3],
        textTransform: 'uppercase',
        letterSpacing: theme.letterSpacing.tracked
    }
}

const variants ={
    button: {
        primary:{
            ...defaults.button,
            color: theme.colors.primary.main,
            borderColor: theme.colors.primary.main
        },
        contrast:{
            ...defaults.button,
            color: theme.colors.primary.contrasText,
            borderColor: theme.colors.primary.contrasText
        }
    },
    iconButton: {
        primary: {
            color: theme.colors.primary.main
        },
        contrast: {
            color: theme.colors.primary.contrasText
        }
    },
    linkButton:{
        primary:{
            color: theme.colors.primary.main
        },
        contrast: {
           color: theme.colors.primary.contrasText
        }
    },
    
}



const Gray = {
    ...theme, defaults, variants
}

const Gray = {...theme, defaults, variants, images, icons};
export {Gray};
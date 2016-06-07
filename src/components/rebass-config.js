
import { config } from 'rebass'

const black = '#000'
const green = '#0a613f'
const yellow = '#ffeb34'
const orange = '#fd6e21'
const bold = 900

const rebassConfig = {
    colors: {
        ...config.colors,
        primary: 'inherit',
        black,
        green,
        yellow,
        orange
    },

    fontSizes: [
        72,
        64,
        48,
        32,
        24,
        16,
        12
    ],

    bold,
    borderRadius: 0,
    borderColor: black,

    Heading: {
        textTransform: 'uppercase',
        letterSpacing: '.2em'
    },

    Text: {
        fontSize: 20,
        fontWeight: bold
    },

    ButtonOutline: {
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        paddingTop: config.scale[2],
        paddingBottom: config.scale[2],
        paddingLeft: config.scale[3],
        paddingRight: config.scale[3],
        boxShadow: 'inset 0 0 0 2px',
    }
}

export default rebassConfig


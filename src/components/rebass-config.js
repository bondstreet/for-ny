
import { config } from 'rebass'

const bold = 900

const rebassConfig = {
    colors: {
        ...config.colors,
        black: '#000',
        primary: '#000'
    },

    bold,
    borderRadius: 0,

    Text: {
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


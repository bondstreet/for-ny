
import { config } from 'rebass'

const rebassConfig = {
    colors: {
        ...config.colors,
        black: '#000',
        primary: '#000'
    },

    borderRadius: 0,

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


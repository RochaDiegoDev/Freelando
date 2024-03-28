import { ThemeProvider } from '@emotion/react'
import PropTypes from 'prop-types';

const tema = {
    cores:{
        branco: '',
        atencao: '',
        focus: '',

        primarias: {
            a: '#5754ed' ,
            b: '',
            c: ''
        },

        secundarias: {
            a: '#ebeaf9' ,
            b: '',
            c: ''
        }, 

        neutras: {
            a: '' ,
            b: '',
            c: '',
            d: '',
        }, 

        dark: {
            a: '',
            b: '',
        }

    },

    espacamentos:{
        l: '32px',
        s: '16px',
    }
}

export const ProvedorTema = ({ children }) => {
    return (
        <ThemeProvider
            theme={tema}>
            {children}
        </ThemeProvider>
    )
}

ProvedorTema.propTypes ={
    children:PropTypes.node
}


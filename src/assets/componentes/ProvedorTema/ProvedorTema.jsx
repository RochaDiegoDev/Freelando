import { ThemeProvider } from '@emotion/react'
import PropTypes from 'prop-types';

const tema = {
    cores:{
        branco: '#fff',
        atencao: '',
        focus: '#B009FF',

        primarias: {
            a: '#5754ED' ,
            b: '#D93114',
            c: '#fff'
        },

        secundarias: {
            a: '#F8F8FD' ,
            b: '',
            c: ''
        }, 

        neutras: {
            a: '#373737' ,
            b: '',
            c: '',
            d: '',
        }, 

        dark: {
            a: '',
            b: '#B61B00',
        }

    },

    espacamentos:{
        xs: '8px',
        l: '32px',
        s: '16px',
    },

    fontFamily: "'Montserrat', sans-serif"
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


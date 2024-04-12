import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {LabelEstilizada} from '../Labels/index'

const InputEstilizada = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${props => props.theme.espacamentos.xs};
    margin-bottom: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border: 1px solid;
    border-color: ${props => props.theme.cores.neutras.a};
    border-radius: ${props => props.theme.espacamentos.s};
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    `

export const CampoTexto = ({ titulo }) => {
    return (
        <LabelEstilizada> 
                {titulo} 
                <InputEstilizada/>
        </LabelEstilizada>
    )
}

CampoTexto.propTypes = {
    titulo: PropTypes.node
}
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const LabelEstilizada = styled.label`
    display: block;
    width: 100%; 
    box-sizing:border-box;
    margin-top: ${props => props.theme.espacamentos.xs};
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    background: ${props => props.theme.cores.branco};
    text-align: left;
`
const InputEstilizada = styled.input`
    display: block;
    width: 100%; 
    border-color:${props => props.theme.cores.neutras.a};
    border-radius:${props => props.theme.espacamentos.s};
    height:40px;
    font-size: 14px;
    line-height:17px;
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
    children: PropTypes.node
}
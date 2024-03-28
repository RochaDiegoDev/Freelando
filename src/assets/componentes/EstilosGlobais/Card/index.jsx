import styled from '@emotion/styled'
import PropTypes from 'prop-types';


const DivEstilizada = styled.div`
    padding: ${props => props.theme.espacamentos.l};
    background: ${props => props.theme.cores.secundarias.a};
    border-radius: ${props => props.theme.espacamentos.s};
    border: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
`

export const Card =({children}) => {
    return(
        <div>
            <DivEstilizada>
                {children}
            </DivEstilizada>
        </div>
    )
}


Card.propTypes ={
    children:PropTypes.node
}
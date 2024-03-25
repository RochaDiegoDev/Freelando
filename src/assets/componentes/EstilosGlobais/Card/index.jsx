import styled from '@emotion/styled'
import PropTypes from 'prop-types';


const DivEstilizada = styled.div`
    padding: 32px;
    background: #ebeaf9;
    border-radius: 16px;
    border: 1px solid #5754ed;
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
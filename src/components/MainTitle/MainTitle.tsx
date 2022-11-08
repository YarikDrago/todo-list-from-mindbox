import React, {ReactElement, useEffect, useRef} from 'react';
import styled from 'styled-components'

const StyledTitle =  styled.h1`
  font-family: 'Yantramanav', sans-serif;
  font-weight: 100;  
  color: #e7d7d6;
  font-size: 7rem;
  margin: 0;
`

const MainTitle = ({...props}) => {
    const refTitle = useRef(null)

    return (
        <StyledTitle
            ref = {refTitle}
            data-testid={'main-title'}
        >
            {props.children}
        </StyledTitle>
    );
};

export default MainTitle;
import React from 'react';
import styled from 'styled-components'

const StyledBtn = styled.button`
  //display: block;
  --borderThickness: 1px;
  box-sizing: border-box;
  padding: 5px;
  margin: 0 10px;
  background-color: transparent;
  border: var(--borderThickness) solid transparent;
  border-radius: 5px;
  :hover{
    border: var(--borderThickness) solid #e8d1d1;
  }
  
  &.active{
    border: var(--borderThickness) solid #e8d1d1;
  }
`
const ListButton = ({...props}) => {
    return (
        <StyledBtn
            className={props.className}
            onClick={props.onClick}
        >
            {props.children}
        </StyledBtn>
    );
};

export default ListButton;
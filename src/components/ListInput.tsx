import React, {useRef, useState} from 'react';
import styled from 'styled-components'
import ListData from "../ListData";

const Cell = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 80px 1fr ;
  grid-template-rows: 79px;
  box-sizing: border-box; 
  width: 100%;
  //height: 80px;
  padding: 0;
  border-width: 1px 0 2px 0;
  border-color: rgba(125,125,125,0.3);
  border-style: solid;
`
const InputLine = styled.input`
  position: relative;
  display: block;
  box-sizing: border-box; 
  width: 100%;
  //width: auto;
  height: 100%;
  padding: 0 0 0 20px;
  border: none;
  //box-shadow: rgba(100, 100, 111, 0.5) 5px 7px 29px 0;
  font-size: 2rem;
  ::placeholder{    
    //text-align: center;
    font-family: 'Yantramanav', sans-serif;
    font-style: italic;
    font-weight: 300;
    margin: 0;
    //font-size: 2rem;
    color: #e3e3e3;   
    transition: color 1s linear; 
  }
  &.bad-check{
      ::placeholder{
        color: #f00000;
      }
      
    }
`

const AddBtn = styled.button`
  position: relative;
  display: block;
  box-sizing: border-box;
  margin: 0;
  height: 100%;
  width: 80px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  :hover{
    svg{
      background-color: #71bcab;
    }
  }
`

const ArrowDown = styled.svg`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #d7d4d4;
  clip-path: polygon(25% 35%, 50% 50%, 75% 35%, 75% 45%, 50% 60%, 25% 45%);
  transition: background-color .3s linear;
  pointer-events: none;
`

const ListInput = () => {
    const [inputText, setInputText] = useState("")
    const refInput = useRef(null)

    function btnClick(){
        console.log("btn add click")
         if (checkInput()){
             console.log("checked")
             const newTask : {taskText: string, status: boolean} = {
                 taskText: inputText,
                 status: false
             }
             ListData.addTask(newTask)
             ListData.addIncompletedTask()
             const inputElem = refInput.current as HTMLInputElement | null
             if (inputElem !== null){
                 inputElem.value = ""
             }
             setInputText("")
         } else {
             console.log("check false")
         }

    }

    function checkInput(){
        console.log("check input")
        if (inputText === ""){
            // console.log("empty input")
            const inputElem = refInput.current as HTMLElement | null
            if (inputElem !== null){
                inputElem.classList.add("bad-check")
                setTimeout(()=>{inputElem.classList.remove("bad-check")},1000)
                return false
            }
        } else {
            // console.log("go ahead")
            return true
        }
    }

    function btnPress(e : React.KeyboardEvent){
     console.log("Btn press")
        if (e.key === "Enter"){
            btnClick()
        }
    }

    return (
        <Cell>
            <AddBtn onClick = {()=>{btnClick()}}
            ><ArrowDown/></AddBtn>
            <InputLine
                ref = {refInput}
                type={"text"}
                placeholder={'What needs to be done?'}
                onChange={(e)=>{setInputText(e.target.value)}}
                onKeyDown={(e : React.KeyboardEvent)=>{btnPress(e)}}
            />
        </Cell>
        // <InputLine type={'text'} placeholder={'What needs to be done?'}/>
    );
};

export default ListInput;
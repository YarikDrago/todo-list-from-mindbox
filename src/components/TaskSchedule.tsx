import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import ListData from "../ListData";
import {observer} from "mobx-react";

const Schedule = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
`

const Cell  = styled.ol`
  position: relative;
  display: grid;
  grid-template-columns: 80px 1fr ;
  grid-template-rows: 79px;
  box-sizing: border-box; 
  width: 100%;
  height: 80px;
  padding: 0;
  overflow: hidden;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: rgba(125,125,125,0.3);
`
const StatusBtn = styled.button`
  --btnSide: 40px;
  position: relative;
  width: var(--btnSide);
  height: var(--btnSide);
  padding: 0;
  //transform: translate(calc(40px - var(--btnSide)/2), 15%);
  transform: translate(calc(40px - var(--btnSide)/2), calc(40px - var(--btnSide)/2));
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: #e3e3e3;
  cursor: pointer;
  transition: border-color .3s linear;
  &.done{
    border-color: #71bcab;
  }
`

const TaskText = styled.p`
   position: relative;
   display: block;
   box-sizing: border-box;
   //width: 100%;
   //height: 100%;
   margin: 0;
   text-align: left;
   text-justify: auto;
   line-height: 80px;
   padding-left: 20px;
   font-size: 2rem;  
   //font-weight: 300;
   font-family: 'Yantramanav', sans-serif; 
   background-color: transparent;
   color: #4e4e4e;
   transition: color .3s linear;   
   &.done{
    text-decoration: line-through;
    color: #e3e3e3;
   }
`

const CheckMark = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //clip-path: polygon(50% 20%, 80% 20%, 80% 30%, 50% 30%);
  clip-path: polygon(40% 75%, 75% 25%, 78% 28%, 40% 80%, 25% 65%, 28% 62%);
  background-color: #71bcab;
  pointer-events: none;
`


interface ITask{
    taskText: string
    status: boolean
}

const TaskSchedule = observer(() => {
    const [showedSchedule, setShowedSchedule] = useState<Array<ITask>>([])

    useEffect(()=>{
        setShowedSchedule(ListData.todoList)
    },[])

    useEffect(()=>{
        if (ListData.showOption === "all"){
            setShowedSchedule(ListData.todoList)
        }
        if (ListData.showOption === "active"){
            setShowedSchedule(ListData.todoList.filter(elem => elem.status === false && elem))
        }
        if (ListData.showOption === "completed"){
            setShowedSchedule(ListData.todoList.filter(elem => elem.status === true && elem))
        }
    },[ListData.showOption])

    useEffect(()=>{
        console.log("schedule was changed")
        setShowedSchedule(ListData.todoList)
    },[ListData.todoList.length])

    function btnClick(index: number, status: boolean){
        console.log("btn click", index)
        if (status) {
            ListData.addIncompletedTask()
        } else {
            ListData.subtractIncompletedTask()
        }
        ListData.changeStatus(index)


    }
    return (
        <Schedule>
            {showedSchedule.map((elem, index)=>
                <Cell>
                    <StatusBtn
                        className={elem.status ? "done" :  ""}
                        onClick={()=>{btnClick(index, elem.status)}}
                    >
                        {elem.status && <CheckMark/>}
                    </StatusBtn>
                    <TaskText className={elem.status ? "done" : ""}>{elem.taskText}</TaskText>
                </Cell>
            )}
        </Schedule>
    );
})

export default TaskSchedule;
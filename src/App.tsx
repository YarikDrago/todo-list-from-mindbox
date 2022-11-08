import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components'
import ListButton from "./components/ListButton";
import ListInput from "./components/ListInput";
import TaskSchedule from "./components/TaskSchedule";
import ListData from "./ListData";
import {observer} from "mobx-react";
import MainTitle from "./components/MainTitle/MainTitle";


const StyledApp = styled.article`
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  
  background-color: #f2f2f2;
`

const TitleTodos = styled.h1`
  //font-family: 'Comfortaa', cursive;
  font-family: 'Yantramanav', sans-serif;
  font-weight: 100;  
  color: #e7d7d6;
  font-size: 7rem;
  margin: 0;
`

const ToDoMainForm = styled.main`
  display: block;
  box-sizing: border-box;
  width: 600px;
  height: auto;
  //padding: 10px;  
  background-color: #fcfcfc;
  box-shadow: rgba(100, 100, 111, 0.5) 5px 7px 29px 0;
`

const List = styled.main`
  //box-shadow: rgba(100, 100, 111, 0.5) 5px 7px 29px 0;
`

const ListFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;  
`


const App = observer(()=> {

    const [activeBtn, setActiveBtn] = useState("all");

    function showAll(){
        setActiveBtn("all")
        ListData.changeShowOption("all")
        // console.log("show all")
    }

    function showActive(){
        setActiveBtn("active")
        ListData.changeShowOption("active")
        // console.log("show active")
    }

    function showComleted(){
        setActiveBtn("completed")
        ListData.changeShowOption("completed")
        // console.log("show completed")
    }

    function clearCompleted(){
        console.log("clear completed")
        ListData.clearCompleted()
    }

  return (
    <StyledApp className="App">
        <MainTitle>todos</MainTitle>
        <ToDoMainForm>
            <ListInput/>
            <TaskSchedule/>
            <ListFooter>
                <p style={{marginLeft: "10px"}}>{`${ListData.incomletedTasks} items left`}</p>
                <nav>
                    <ListButton
                        className={activeBtn === "all" ? "active" : ""}
                        onClick={()=>{showAll()}}
                    >All</ListButton>
                    <ListButton
                        className={activeBtn === "active" ? "active" : ""}
                        onClick={()=>{showActive()}}
                    >Active</ListButton>
                    <ListButton
                        className={activeBtn === "completed" ? "active" : ""}
                        onClick={()=>{showComleted()}}
                    >Completed</ListButton>
                </nav>
                <ListButton
                    onClick={()=>{clearCompleted()}}
                >Clear completed</ListButton>
            </ListFooter>
        </ToDoMainForm>

    </StyledApp>
  );
})

export default App;

import {makeAutoObservable, toJS} from "mobx";

interface ITask{
    taskText: string
    status: boolean
}

class ListData{
    constructor() {
        makeAutoObservable(this)
    }

    // todoList: { taskText: number, status: boolean }[] = []
    todoList: { taskText: string, status: boolean }[] = [
        {
            taskText: "Тестовое задание",
            status: false
        },
        {
            taskText: "Прекрасный код",
            status: true
        },
        {
            taskText: "Покрытие тестами",
            status: false
        },

    ]

    incomletedTasks = 2
    showOption = "all"

    addTask(newTask: {taskText: string, status: boolean}){
        // this.todoList = [...this.todoList, newTask]
        this.todoList.push(newTask)
    }

    changeStatus(index: number){
        this.todoList[index].status = !this.todoList[index].status
    }

    clearCompleted(){
        console.log(toJS(this.todoList.filter(elem => elem.status === false && toJS(elem))))
        this.todoList = toJS(this.todoList.filter(elem => elem.status === false && toJS(elem)))
    }

    addIncompletedTask(){
        this.incomletedTasks += 1
    }

    subtractIncompletedTask(){
        this.incomletedTasks -= 1
    }

    changeShowOption(newOption: string){
        this.showOption = newOption
    }
}

export default new ListData()
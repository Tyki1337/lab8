import { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import ToDoList from './ToDoList'
import './App.css'


export default function App() {
const [tasks, setTasks] = useState([])


function addTask(text) {
const newTask = { id: Date.now(), text }
setTasks([...tasks, newTask])
}


function removeTask(id) {
setTasks(tasks.filter(t => t.id !== id))
}


return (
<div className="app-container">
<h1>ToDo</h1>
<AddTaskForm addTask={addTask} />
<ToDoList tasks={tasks} removeTask={removeTask} />
</div>
)
}
import ToDoItem from './ToDoItem'
import './ToDoList.css'


export default function ToDoList({ tasks, removeTask }) {
return (
<div className="list-container">
{tasks.map(t => (
<ToDoItem key={t.id} task={t} removeTask={removeTask} />
))}
</div>
)
}
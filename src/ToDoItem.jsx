import './ToDoItem.css'


export default function ToDoItem({ task, removeTask }) {
return (
<div className="item-container">
<span>{task.text}</span>
<button onClick={() => removeTask(task.id)}>Удалить</button>
</div>
)
}
import { useState } from 'react'
import './AddTaskForm.css'


export default function AddTaskForm({ addTask }) {
const [value, setValue] = useState('')


function handleSubmit(e) {
e.preventDefault()
if (!value.trim()) return
addTask(value)
setValue('')
}


return (
<form onSubmit={handleSubmit} className="form-container">
<input
value={value}
onChange={e => setValue(e.target.value)}
placeholder="Новая задача"
/>
<button>Добавить</button>
</form>
)
}
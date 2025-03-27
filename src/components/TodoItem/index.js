// Write your code here
import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {details, functionDelete, checkTodo, editTodo, saveTodo} = props
  const {id, title, isChecked, isEdit} = details

  const [topic, setTopic] = useState(title)

  const deleteTodo = () => {
    functionDelete(id)
  }

  const handleTopic = e => {
    setTopic(e.target.value)
  }

  return (
    <li className="list-item">
      <input
        id={id}
        checked={isChecked}
        onChange={e => checkTodo(e, id)}
        type="checkbox"
      />
      {isEdit ? (
        <input onChange={handleTopic} type="text" value={topic} />
      ) : (
        <p
          style={{textDecoration: isChecked ? 'line-through' : null}}
          className="title"
        >
          {title}
        </p>
      )}

      {isEdit ? (
        <button
          onClick={() => saveTodo(id, topic)}
          className="buttton save"
          type="button"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => editTodo(id)}
          className="buttton edit"
          type="button"
        >
          Edit
        </button>
      )}

      <button onClick={deleteTodo} className="buttton" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem

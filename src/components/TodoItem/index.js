// Write your code here

import './index.css'

const TodoItem = props => {
  const {details, functionDelete} = props
  const {id, title} = details
  const deleteTodo = () => {
    functionDelete(id)
  }
  console.log(details.id)
  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button onClick={deleteTodo} className="buttton" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem

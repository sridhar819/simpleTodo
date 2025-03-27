import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
]

class SimpleTodos extends Component {
  state = {todolist: initialTodosList, topic: ''}

  deleteUser = id => {
    this.setState(prevState => ({
      todolist: prevState.todolist.filter(each => each.id !== id),
    }))
  }

  checkTodo = (e, id) => {
    const {checked} = e.target

    this.setState(pre => ({
      todolist: pre.todolist.map(each =>
        each.id === id ? {...each, isChecked: checked} : each,
      ),
    }))
  }

  editTodo = id => {
    this.setState(pre => ({
      todolist: pre.todolist.map(each =>
        each.id === id ? {...each, isEdit: true} : each,
      ),
    }))
  }

  saveTodo = (id, topic) => {
    this.setState(pre => ({
      todolist: pre.todolist.map(each =>
        each.id === id ? {...each, title: topic, isEdit: false} : each,
      ),
    }))
  }

  handleTitle = e => {
    this.setState({topic: e.target.value})
  }

  onSubmitForm = e => {
    e.preventDefault()
    const {topic} = this.state

    const words = topic.split(' ')
    const numTodos = parseInt(words[words.length - 1], 10)

    const task = words.slice(0, -1).join(' ')

    if (task && typeof numTodos === 'number' && numTodos > 0) {
      const newTodos = Array.from({length: numTodos}, () => ({
        id: uuidv4(),
        title: task,
      }))

      this.setState(prevState => ({
        todolist: [...prevState.todolist, ...newTodos],
        topic: '',
      }))
    } else if (topic) {
      const newTodo = {
        id: uuidv4(),
        title: topic,
      }

      this.setState(prevState => ({
        todolist: [...prevState.todolist, newTodo],
        topic: '',
      }))
    }
  }

  /* setLocalStorage = () => {
    const {todolist} = this.state
    localStorage.setItem('todoList', JSON.stringify(todolist))
  }
 */

  render() {
    const {todolist, topic} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <form onSubmit={this.onSubmitForm} className="add-form">
            <input
              value={topic}
              onChange={this.handleTitle}
              type="text"
              placeholder="Enter todo title"
            />

            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <ul className="todo-card">
            {todolist.map(each => (
              <TodoItem
                saveTodo={this.saveTodo}
                editTodo={this.editTodo}
                checkTodo={this.checkTodo}
                functionDelete={this.deleteUser}
                key={each.id}
                details={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

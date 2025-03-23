import './index.css'
import {Component} from 'react'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todolist: initialTodosList}

  deleteUser = id => {
    const {todolist} = this.state

    this.setState({
      todolist: todolist.filter(each => each.id !== id),
    })
  }

  render() {
    const {todolist} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>

          <ul className="todo-card">
            {todolist.map(each => (
              <TodoItem
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

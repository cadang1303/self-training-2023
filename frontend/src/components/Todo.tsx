interface ITodo {
  id: string | number
  name: string
  isCompleted: boolean
}

interface Props {
  todo: ITodo
  handleDelete: (id: string | number) => void
  handleStatus: (id: string | number) => void
}

const TodoItem = ({ todo, handleDelete, handleStatus }: Props) => {
  return (
    <div className='todo-item'>
      <input type='checkbox' name='status' id='status' onChange={() => handleStatus(todo.id)} />
      <label htmlFor='status'>{todo.name}</label>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem

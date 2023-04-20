import { useCallback, useEffect, useState } from 'react'
import TodoItem from '@/components/Todo'
import Modal from '@/components/modals/Modal'
import Loading from './loader-spinner/Loading'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setLoading } from './loader-spinner/loading.slice'
import { useToast } from './notifications'

interface Todo {
  id: string | number
  name: string
  isCompleted: boolean
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [textInput, setTextInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const isLoading = useAppSelector((state) => state.loading.isLoading)
  const dispatch = useAppDispatch()
  const toast = useToast()

  const handleInput = useCallback((e: { target: { value: string } }) => {
    setTextInput(e.target.value)
  }, [])

  const handleAddBtn = useCallback(() => {
    setTodoList([...todoList, { id: todoList.length + 1, name: textInput, isCompleted: false }])
    dispatch(setLoading(true))
    setTextInput('')
    setIsOpen(false)
  }, [dispatch, textInput, todoList])

  const handleDeleteTodo = useCallback(
    (id: string | number) => {
      if (todoList.find((item) => item.id === id)) {
        setTodoList(todoList.filter((item) => item.id != id))
      }
    },
    [todoList]
  )

  const handleStatusTodo = useCallback(
    (id: string | number) => {
      const todo = todoList.find((item) => item.id === id)
      if (todo) {
        todo.isCompleted = !todo.isCompleted
      }
    },
    [todoList]
  )

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        dispatch(setLoading(false))
      }, 500)
    }
  })

  return (
    <div>
      <Loading />
      <h1>Todo</h1>
      <div className='add-todo'>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div className='add-todo-header'>Add new Item</div>
          <input type='text' name='add-todo' placeholder='Add Todo ' value={textInput} onChange={handleInput} />
          <button onClick={handleAddBtn}>Add</button>
        </Modal>
      </div>
      <div className='todo-list'>
        <div className='todo-list-header'>Todo List</div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDeleteTodo} handleStatus={handleStatusTodo} />
        ))}
      </div>
      <div className='btn-toast'>
        <button
          onClick={() => {
            toast.open('erererkoaskfdoksadof')
          }}
        >
          On Toast
        </button>
      </div>
    </div>
  )
}

export default TodoList

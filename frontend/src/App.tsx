import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '@/components/pages/Home'
import LoginPage from '@/components/pages/LoginPage'
import TodoList from '@/components/TodoList'
import Loading from './components/loader-spinner/Loading'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/todo' element={<TodoList />} />
      <Route path='*' element={<div>Error</div>} />
    </Routes>
  )
}

export default App

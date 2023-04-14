import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '~/components/pages/Home'
import LoginPage from '~/components/pages/LoginPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<div>Error</div>} />
    </Routes>
  )
}

export default App

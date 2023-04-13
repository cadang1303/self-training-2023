import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '~/components/pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<div>Error</div>} />
    </Routes>
  )
}

export default App

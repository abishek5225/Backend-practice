import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import Addbook from './pages/addbook'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/dashboard">
        <Route index element={<Dashboard/>}/>
        <Route path="addbook" element={<Addbook />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App

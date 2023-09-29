import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from './Signup'
import { Login } from './Login'
import { Main } from './Main'
import Todo from './Todo'


export const MainRoute = () => {
  return (
    <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Main />} />
        <Route path='/todo' element={<Todo />} />
    </Routes>
  )
}

import React from 'react'
import ToDo from './components/todo/ToDo'
import Counter from './components/counter/Counter'


const App = () => {
  return (
    <div className='flex justify-center bg-gray-100 space-x-10'>
      <ToDo/>
      <Counter/>
    </div>
  )
}

export default App

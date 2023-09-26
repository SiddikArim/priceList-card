import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import PriceList from './Components/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav></Nav>
      <h1 className='text-7xl text-purple-500'>Hello react tailwind</h1>
      <PriceList></PriceList>
    </div>
  )
}

export default App

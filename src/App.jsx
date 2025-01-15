import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUpForm from './components/form/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUpForm/>
    </>
  )
}

export default App

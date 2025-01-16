import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUpForm from './components/form/SignUp'
import Header from './components/layout/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header/>
      <SignUpForm/>
    </main>
  )
}

export default App

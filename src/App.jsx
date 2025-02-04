import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Description from './components/Description'
import Criteria from './components/Criteria'
import ProblemStatements from './components/ProblemStatements'
import HackathonRules from './components/HackathonRules'
import Prizes from './components/Prizes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero/>
      <Description/>
      <Criteria/>
      <ProblemStatements/>
      <HackathonRules/>
      <Prizes/>
    </div>
  )
}

export default App

import './App.scss'

import ServiceFooter from './components/ServiceFooter';
import ServiceHeader from './components/ServiceHeader';
import reactLogo from './assets/react.svg'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ServiceHeader />
      <div className="App">
        <div>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo" alt="React logo" />
          </a>
        </div>
        <h1 className="nhsuk-heading-l">Type 1 Opt-Out</h1>
        <h1 className="nhsuk-heading-l">Configuration</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
      <ServiceFooter />
    </>
  )
}

export default App

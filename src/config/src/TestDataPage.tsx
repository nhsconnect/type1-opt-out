import './App.scss'

import ServiceFooter from './components/ServiceFooter';
import ServiceHeader from './components/ServiceHeader';
import reactLogo from './assets/react.svg'
import { useState } from 'react'

function TestDataPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ServiceHeader />
      <div className="App">
        <div className="card">
        <div className="nhsuk-grid-row">
          <div className="nhsuk-grid-column-two-thirds">
          <nav className="nhsuk-contents-list" role="navigation" aria-label="Pages in this guide">
          <ol className="nhsuk-contents-list__list">
            <li className="nhsuk-contents-list__item">
              <a className="nhsuk-contents-list__link" href="">Patients</a>
            </li>
            <li className="nhsuk-contents-list__item">
              <a className="nhsuk-contents-list__link" href="">Practises</a>
            </li>
            <li className="nhsuk-contents-list__item">
              <a className="nhsuk-contents-list__link" href="">Test Data</a>
            </li>
          </ol>
          </nav>
        </div>
        </div>
        </div>
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

export default TestDataPage

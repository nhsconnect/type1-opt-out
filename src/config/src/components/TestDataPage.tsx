import '../App.scss'

import ServiceFooter from './ServiceFooter';
import ServiceHeader from './ServiceHeader';
import reactLogo from '../assets/react.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function TestDataPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
        <div className="card">
        <div className="nhsuk-grid-row">
          <div className="nhsuk-grid-column-two-thirds">
          <nav className="nhsuk-contents-list" role="navigation" aria-label="Pages in this guide">
          <ol className="nhsuk-contents-list__list">
            <li className="nhsuk-contents-list__item">
            <Link className="nhsuk-contents-list__link" to="/config/patients">Patients</Link>

            </li>
            <li className="nhsuk-contents-list__item">
              <a className="nhsuk-contents-list__link" href="">Practises</a>
            </li>
            <li className="nhsuk-contents-list__item">
              <Link className="nhsuk-contents-list__link" to="">System Suppliers</Link>
                    
            
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
      
      
    </>
  )
}

export default TestDataPage

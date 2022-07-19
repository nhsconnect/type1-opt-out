import '../App.scss'
import { Link } from 'react-router-dom';

function TestDataPage() {

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
    </>
  )
}

export default TestDataPage

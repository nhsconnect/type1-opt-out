import React from "react";
import { Link } from 'react-router-dom'

import App from "App";
import { useCallback } from "react";
function Home(props: any) {

  return (
    <div className="card">
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-two-thirds">
          <h1>Configuration</h1>
          <nav className="nhsuk-contents-list" role="navigation" aria-label="Pages in this guide">
            <ol className="nhsuk-contents-list__list">
              <li className="nhsuk-contents-list__item">
                <a className="nhsuk-contents-list__link" href="">Application</a>
              </li>
              <li className="nhsuk-contents-list__item">
                <a className="nhsuk-contents-list__link" href="">Content</a>
              </li>
              <li className="nhsuk-contents-list__item">
                <Link className="nhsuk-contents-list__link" to="/config/testdata">Test Data</Link>

              </li>
            </ol>
          </nav>

        </div>
      </div>
    </div>
  );
}

export default Home;


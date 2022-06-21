import './App.scss'
import Home from './components/Home';

import ServiceFooter from './components/ServiceFooter';
import ServiceHeader from './components/ServiceHeader';
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Patients from './components/Patients';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      
      <div className="App">
      <ServiceHeader />
        <div>
          <Switch>
            <Route exact path="/config_index.html">
             <Patients />
            
            </Route>
            <Route exact path = "/config/patientsop" component={Patients}>
              <Patients />
            </Route>
          </Switch>
         
        
      </div>
      <ServiceFooter />
      </div>
    
      
      </Router>
      
    </>
  )
}

export default App

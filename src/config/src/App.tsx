import './App.scss'
import Home from './components/Home';
import { useLocation } from "react-router-dom";
import Breadcrumbs from './components/Breadcrumbs';
import ServiceFooter from './components/ServiceFooter';
import ServiceHeader from './components/ServiceHeader';
import reactLogo from './assets/react.svg'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Patients from './components/Patients';
import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import TestDataPage from './components/TestDataPage';
import AddPatient from './components/AddPatient';
function App() {
  const [count, setCount] = useState(0)
  /*let locationsit = useLocation();*/
  const [crumbs, setCrumbs] = useState([
    {name:'Home', path:'/config'},
    {name:'Test Data', path:'/config/testdata'},
    {name:'Patients', path:'/config/patients'}])
  const selected = function (crumb: any) {
    console.log(crumb)
  }
  const addCrumb = (crumb:any) => {
    
}

  /*const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <React.Fragment>
      {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
    </React.Fragment>
  );
}

useEffect(() => {
  console.log(''location.pathname'')
}

)
*/

  return (
    
    <>
    

  
    <Breadcrumbs crumbs={crumbs} selected = {selected} />
    
    <Router>
    
      <div className="App">
      <ServiceHeader />
      
        <div>
          <Routes>
            <Route path="/config"  element={<Home />}>
                       
            </Route>
            <Route path="/config/testdata"  element={<TestDataPage />}>
                          
            
            </Route>
            <Route  path="/config/addpatient"  element={<AddPatient />}>
                       
            </Route>

            <Route path = "/config/patients" element={<Patients />}>
              
            </Route>
          </Routes>
         
        
      </div>
      <ServiceFooter />
      </div>
    
      
      </Router>
      
    </>
  )
}

export default App

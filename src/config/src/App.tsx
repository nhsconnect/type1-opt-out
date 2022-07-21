import './App.scss'
import Home from './components/Home';
import { useLocation} from "react-router-dom";
import Breadcrumbs from './components/Breadcrumbs';
import ServiceFooter from './components/ServiceFooter';
import ServiceHeader from './components/ServiceHeader';
import { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom';
import Patients from './components/Patients';
import TestDataPage from './components/TestDataPage';
import AddPatient from './components/AddPatient';
import { createBrowserHistory } from 'history';

function App() {
    let locations=useLocation()

    let history= createBrowserHistory()
    history.listen(({location,action})=> {
      console.log('listen')
      crumbs.map((x, index:number) => {
        if (x.path===location.pathname)
          setPageLocIndex(index)})
        }
    )
    
    const [pageLocIndex,setPageLocIndex] = useState(0)
    const [crumbs, setCrumbs] = useState([
    {name:'Home', path:'/config'},
    {name:'Test Data', path:'/config/testdata'},
    {name:'Patients', path:'/config/patients'},
    {name:'Add Patient', path:'/config/addpatient'}])
    
    const addCrumb = () => {
      crumbs.map((x, index:number) => {
        if(x.path===location.pathname)
          setPageLocIndex(index)
        }
      )
    }

    useEffect(() => {
      crumbs.map((x, index:number) => {
        if (x.path===location.pathname)
          setPageLocIndex(index)})
    },[locations])

    return (
    
    <>
      <header className="nhsuk-header" role="banner">
      <ServiceHeader />  
      </header>
      <div className="nhsuk-width-container ">
        <Breadcrumbs  crumbs={crumbs.slice(0,pageLocIndex+1)}>
        </Breadcrumbs>
        <Routes>
          <Route path="/config"  element={ <Home />} />
          <Route path="/config/testdata" element={<TestDataPage />}/>
          <Route  path="/config/addpatient"  element={<AddPatient />}/>
          <Route path = "/config/patients" element={<Patients />}/>
        </Routes>
      
      </div>
      <ServiceFooter />
    </>
    )
}

export default App

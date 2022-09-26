
import React from 'react'
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './Components/AboutUs'
import Vision from './Components/Vision'
import Mission from './Components/Mission'
import CorporateSocial from './Components/CorporateSocial'
import FounderMessage from './Components/FounderMessage'
import GroupCompanies from './Components/GroupCompanies'
import Footer from './Components/Footer'
import CardAbout from './Components/Card3'
import ParaAbout from './ParaAbout'
// import Hithere from './Components/Hithere';
const App=()=> {
  return (
    <div className="App">
      <Navbar />
      <AboutUs/>
      <CardAbout/>
      <ParaAbout/>
      <Vision/>
      <Mission/>
      <CorporateSocial />
      <FounderMessage/>
      <GroupCompanies/>
      <Footer/>
      {/* <Hithere/> */}
    </div>
  );
}

export default App;

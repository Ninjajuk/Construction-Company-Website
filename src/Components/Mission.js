import React from 'react'
import giftwrappe from '../img/giftwrapper.jpg'
import log1 from '../img/lo1.svg'
 const Mission = () => {
  return (
    <div className="missioncontainer">
        <h4 className='missionheadertext'>Mission</h4>
        <div className='imglogo1'><img src={log1}/></div>
       <div className='missiongrid'>
          <div className='missionitemsgrid'>  <img className='imgmission' src={giftwrappe }/></div>
          <div className='missionitemsgrid'> 
              <div className='higrid' >
                 <h6 className='personalisedheader'>Personalised</h6>
                 <p className='personalisedheadertext'>Our core idealogy is to provide personalised homes to meet the very specific needs of residents.</p>
              </div>
              <div className="missioncommited"><h6 className='committedtext'>Committed</h6></div>
              <div className="missioncommited"><h6 className='committedtext'>Quality & Service Oriented</h6></div>
              <div className="missioncommited"><h6 className='committedtext'>Timely </h6></div>   
           </div>

        </div>
        
   

    </div>
  )
}

export default Mission;

import React from 'react'
import Agriculture from '../img/Agriculture.png'
import fuel from '../img/Fuel.jpg'
import foods from '../img/Foods.jpg'
import logo from '../img/lo1.svg'
 const GroupCompanies=()=> {
  return (
    <>
   <div className='groupMaincontainer'>    
      <h4 className='missionheadertext'>Group Companies</h4>
      <div className='imglogo1'><img style={{paddingBottom:'10px'}} src={logo}/></div>
      <div className='groupcompanycontainer'>
           <div className='groupcompanylistitems'>
              <div className='imggroupcon'><img className='imageslistcompany' src={Agriculture}/></div>
              <h4 className='personalisedheader'>Agriculture</h4>
           </div>
          <div className='groupcompanylistitems'>
              <div className='imggroupcon'><img className='imageslistcompany' src={fuel} /></div>
              <h4 className='personalisedheader'>Fuel</h4>
          </div>
          <div className='groupcompanylistitems'>
              <div className='imggroupcon'><img className='imageslistcompany' src={foods} /></div>
              <h4 className='personalisedheader'>Foods</h4>
          </div>
        </div>
    </div>


    </>
  )
}
export default GroupCompanies;
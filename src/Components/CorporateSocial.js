import React from 'react'
import happychildren from '../img/childrens.png'
import log1 from '../img/lo1.svg'
 const CorporateSocial = () => {
  return (
      <div className='corporatecontainer'>
         <h4 className='missionheadertext'>Corporate Social Responsibility</h4>
         <div className='imglogo1'><img src={log1}/></div>
         <div className='missiongrid'>
            <div className='missionitemsgrid higridgap'>
              <div className='higrid'>
                <h6 className='personalisedheader'>Education for the under-privileged</h6>
                 <p className='personalisedheadertext'>We believe that our future lies in the holistic educational foundation of the youth and we have nurtured that cause by providing the necessary books and monetary support to the under-privileged children of Mumbai & also at several villages in Gujarat. As the Trustees of the H A Desai Boarding School in Matunga, Mumbai, we have been providing living and hospitality services to the academically bright students from the weaker monetary sections of the society.</p>
              </div>
              <div className="missioncommited"><h6>Support for Rural Farmers</h6></div>
              <div className="missioncommited"><h6>Spiritual</h6></div> 
            </div>
            <div className='missionitemsgrid'><img className='imgcorporate' src={happychildren } /></div>

          </div> 
      </div>
          
  )
}
export default CorporateSocial;

import React from 'react'
import happy from '../img/happy-p.jpg'
import lo1 from '../img/lo1.svg'
 const AboutUs = () => {
  return (
    <>
        <div className='aboutuscontainer' >
            <h1 style={{fontSize:'50px',fontFamily: 'Cinzel',textAlign: 'center',color: '#474747',letterSpacing: '0.1em'}}>About Us</h1>
            <div className='imglogo1'>
                <img src={lo1}/>
            </div>
            <div>
              <img style={{width:'100%'}}  src={happy} alt='happy parents'/>
            </div>
            <div className='aboutuspara'>
             <p style={{marginTop:'20px'}}  >We endeavour to build homes which make it's residents happy and proud of their address. Residents are at heart of everything we do, we build homes to live in, not houses to stay in. </p>

            </div>
            
            <div className='imglogo1'>
             <img src={lo1}/>
            </div>
        
        </div>
        



    </>
  )
}
export default AboutUs;
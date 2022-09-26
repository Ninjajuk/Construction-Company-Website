import React from 'react'
import clock from '../img/1Clock.jpg'
import star from '../img/2Star.jpg'
import handshake from '../img/3HandShake.jpg'
import Handhome from '../img/4HandHome.jpg'
import './Card3.css'


function CardAbout() {
  return (
        <div className=' aboutuscard'>
          <div className='col-sm cardcontent'>
            <div className='imageaboutcont'><img src={clock }/></div>
            <p>Our track record has been impeccable with project completion on time and have surpassed expectations many a time, society members have positively received our redevelopment plans and encourage our modern and urbane designs to their neighbours. </p> 
          </div>
          <div className='col-sm cardcontent'>
             <div className='imageaboutcont'><img src={star}/></div>  
            <p>The Hetali Group is a redeveloper like no other with a profound focus on quality and long term satisfaction of its residents. </p>
          </div>
          <div className='col-sm cardcontent'>
             <div className='imageaboutcont'><img src={handshake}/></div>
             <p>They just don't endeavour but build homes which make it's residents proud of their address by putting home-owners at the heart and soul of everything they do from start to finish and post completion. </p> 
          </div>
          <div className='col-sm cardcontent'>
             <div className='imageaboutcont'><img src={Handhome}/></div>
             <p>Hetali Group lives by the ethos of building homes to live and not houses to stay in. </p> 
          </div>
        </div>

  );
}
export default CardAbout;



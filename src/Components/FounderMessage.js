
import React from 'react'
import Card from 'react-bootstrap/Card'
import founderimage from '../img/founder.jpg'

 const FounderMessage= () => {
  return (
      <div className='foundermessagecontainer'>
        <div className='mainfoundercont'>
        <h4 className='missionheadertext'>Founder’s Message</h4>
        <div className='cardcontainer'>
      
          <div className='imgcontainerfounder'>
           <img  src={founderimage }className="founderimage" />
          </div>
          <h4 className='foundername'>Mr. Jayesh H. Pandya</h4>
          <div className='foundertextcont'>
            <p className='foundertext'>
              “When a customer buys a home, he is giving up a major chunk of his
              life's savings to do so. It is imperative to give him exactly what
              he looks for in his home.”
            </p>
          </div>
        </div>
        <div className='foundermessagetextcont'>
        <p className='foundermessagetextcontpara'>
          We bring to our clients much wanted human values, integrity, trust and
          an assurance of responsibility all coupled with our expertise in
          construction, engineering & management. Our biggest assets have always
          been our small but highly trained team of professional managers and
          engineers who are backed by a very able team of administrators. We
          have a clear vision about building on our strengths and our
          achievements while holding dear to us our basic principles
        </p>
        </div>
        </div>
      </div>
  );
}
export default FounderMessage;

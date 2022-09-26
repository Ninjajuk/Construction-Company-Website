import React from 'react'
import logomain from '../img/logo1.svg'
import logob from '../img/l2.svg'
 const Footer = () => {
    const quicklinks=['Contact Us','About Us','Testimonial','Gallery','Site Map'];
    const quicklinkitems=quicklinks.map((item)=><li>{item}</li>);
    const FlatsMumbai=['1BHK Andheri West','2 BHK Andheri West','3 BHK Andheri West','1BHK Goregaon East','2BHK Goregaon East'];
    const FlatsMumbaiitems=FlatsMumbai.map((item)=><li>{item}</li>);
    const ProjectsinMumbai=['Ongoing','Upcoming','Completed','Hetali Blessings','Hetali Anuchhaya'];
    const ProjectsinMumbaiItems=ProjectsinMumbai.map((item)=><li>{item}</li>);

  return (
    <div className='footercont'>
        <div className='footer'>
              <div className='footerlogomain'><img  src={logomain } /></div>
              <div className='footerlinkcontainer'>
                  <div>
                      <h6 className='footeritem'>Quick Links</h6>
                      <ul>{quicklinkitems}</ul>
                    </div>
                    <div>
                       <h6 className='footeritem'>Flats in Mumbai</h6>
                       <ul>{FlatsMumbaiitems}</ul>
                    </div>
                    <div>
                       <h6 className='footeritem'>Projects in Mumbai</h6>
                       <ul>{ProjectsinMumbaiItems}</ul>
                    </div>
                </div>
        </div>
        <div className='imglogo1'><img  src={logob} /></div>
        <div className='footercopyright'><p>Copyright © 2022 Hetali Enterprises - All Rights Reserved.</p></div>       
    </div>
  )
}
export default Footer;
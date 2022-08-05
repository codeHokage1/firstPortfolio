import React from 'react';
import instagram from '../images/icons/icons8-instagram-80.png';
import twitter from '../images/icons/icons8-twitter-80.png';
import whatsapp from '../images/icons/icons8-whatsapp-80.png';
import linkedin from '../images/icons/icons8-linkedin-80.png';
import github from '../images/icons/icons8-github-80.png';


const Socials = () => {
  return (
    <ul className="socials">
            <li><a href="https://github.com/codeHokage1"><img src={github} alt="" /></a></li>
            <li><a href="https://instagram.com/sodiqfarhan"><img src={instagram} alt="" /></a></li>
            <li><a href="https://twitter.com/sodiqfarhan"><img src={twitter} alt="" /></a></li>
            <li><a href="#"><img src={whatsapp} alt="" /></a></li>
            <li><a href="https://linkedin.com/in/sodiqfarhan"><img src={linkedin} alt="" /></a></li>
        </ul>
  )
}

export default Socials
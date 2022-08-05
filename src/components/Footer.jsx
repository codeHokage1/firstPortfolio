import React from 'react'

const Footer = () => {
  return (
      <footer className='footer' id='contact'>
          <div className='footer-inside'>
          <h3>Say Hello!</h3>
          <p className='footer-details'>
              I really look forward to conencting with you. <br />
              I am open to work, internships, contract and networking oppourtunities. Even if it's just a Hi, the door is very much open. 
              And I'd respond as fast as I can.
          </p>
          <p className='highlight thank-you'>Arigato!</p>
          <button>Connect</button><br />
          </div>
          <small>
              &copy; 2022. Built by Sodiq Farhan A. (aka codeHokage) <br />
              Inspired by <a href="https://github.com/bchiang7">Brittany Chiang </a>. 
          </small>
    </footer>
  )
}

export default Footer
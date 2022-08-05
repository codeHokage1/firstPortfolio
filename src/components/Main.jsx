import React, { useState } from 'react';
import myPhoto from '../images/Farhan.jpeg'
// import Accordion from 'react-bootstrap/Accordion';


const Main = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

return (
    <main>
        <section className='hero'>
            <p className='hi'>Hi there! My name is</p>
            <h1>Sodiq Farhan A.</h1>
            <h3>And I can communicate with machines.</h3>
            <p className='brief-intro1'>
                Yeah, I speak Binary. But these days, I just stick with <span className='highlight'>JavaScript</span> and some other fine languages.
                Why? Cause computers are getting smarter. Lol
            </p>
            <p className='brief-intro2'>
                I am very much interested in everything about technology and engineering. I have been able to try my hands on <span className='highlight'>Embedded Systems</span>, <span className='highlight'>Frontend Technologies</span> and <span className='highlight'>Backend Technologies</span>. 
                I am currently learning <span className='highlight'>React JS</span> and <span className='highlight'>C# (and .NET)</span>. 
            </p>            
        </section>

        <hr className='line' />

        <section id='about' className='about-me'>
            <h3>About Me</h3>
            <div className='about-details'>
                <p className='about-details-paragraph'>
                Hiya! My name is Sodiq Farhan A. I am a <span className='highlight'>Computer Engineering</span> major and I am very much interested in almost all areas of technology. 
                I enjoy understanding how things work the way they do. Hence, the reason for my course of study. I started out with <span className='highlight'>HTML and CSS</span> in 2020 and was able to 
                build a couple of simple projects. I was able to participate in a couple of online and on-site internships with this knowledge. 
                Fast forward to some time in 2022, I have been able to learn about the backend technology, <span className='highlight'>Node</span>; and how it collaborates with Front end designs 
                to produce a full stack web app.

                I have some experience with hardware too. I have been able to work with the <span className='highlight'>Arduino Microcontroller</span> and also build projects with it. 
                I use <span className='highlight'>EasyEDA</span> to design PCBs and also troubleshoot circuits.

                I am currently harnessing my full stack development potentials. Wish me luck!
                </p>
                <img src={myPhoto} alt="" />
            </div>
        </section>
        






        <hr className='line' />

        <section className='experience' id='experience'>
            <h3 className='experience-heading'>Experience</h3>
            <section className='experience-item'>
                <div className='experience-view-bar'>
                    <h3>Embedded Systems Intern</h3>
                    <button onClick={() => setIsVisible1(!isVisible1)}>{isVisible1 ? '^' : ' v'}</button>
                </div>
                {
                    isVisible1 && (
                        <div className="experience-details">
                            <p>Company: PluralCode Academy</p>
                            <p>Dates: November 2021 - July 2022</p>
                            <ol>
                                <li>Worked on basic electronic projects in embedded systems and automation</li>
                                <li> Worked with a team of 3 to create contents for the company's website and social media pages</li>   
                                <li>Helped review codes and troubleshoot circuits for project implementation</li>
                            </ol>
                        </div>
                    )
                }
            </section>
            <section className='experience-item'>
                <div className='experience-view-bar'>
                    <h3>Asst. Mentor & Web Intern</h3>
                    <button onClick={() => setIsVisible2(!isVisible2)}>{isVisible2 ? '^' : ' v'}</button>
                </div>
                {
                    isVisible2 && (
                        <div className="experience-details">
                            <p>Company: GlobalStar in Innovative Information Technology (GIIT)</p>
                            <p>Dates: August 2020 - October 2020</p>
                            <ol>
                                <li>Taught web development using HTML, CSS and JavaScript to 6 sets of about 15 students</li>
                                <li> Assisted in the marketing department to grow business awareness through brand advertisement</li>   
                                <li>Worked with the customer care department to attend to clients and students for enquiries, filing of paper-works and monitoring of students’ attendance through trackers</li>
                            </ol>
                        </div>
                    )
                }
            </section>
            
            
        </section>


        <hr className='line' />

    </main>
  )
}

export default Main;
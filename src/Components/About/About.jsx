import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/about_profile.svg' 
import pic from '../../assets/WhatsApp Image 2024-04-30 at 08.57.33_0127c52e.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={pic} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Graphic Designer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passion for graphic designer is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Branding</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>Digital printing</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Creativity</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Thumbnail design</p><hr style={{width:"60%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>100+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>45+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
      
    </div>
  )
}

export default About

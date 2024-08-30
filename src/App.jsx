import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Logo from './assets/WhatsApp_icon.png'

const App = () => {
  return (
    <div>
      <div className="what" style={{zIndex: "6", left: "initial"}}>
        <a className='ddd' href="https://wa.me/916353356302" target='_blank'>
          <img src={Logo} width="60" style={{position:'fixed', bottom: '20px', right:'30px'}} alt="aaaa" />
        </a>
      </div>


      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

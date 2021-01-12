import React from 'react'
import {FaLinkedinIn, FaGithub, FaWhatsapp} from 'react-icons/fa'

const SocialMediaBar = () => {
    return (
        <div id='social-media'>
          <p>Contate-me</p>
          <a target='blank' href='https://www.linkedin.com/in/lucasalvesafonso/' id='linkedin' className='social-media-links'><FaLinkedinIn/></a>
          <a target='blank' href='https://github.com/devlucasalaf' id='github' className='social-media-links'><FaGithub/></a>
          <a target='blank' href='https://api.whatsapp.com/send?phone=5521998437728&text=Ol%C3%A1%20gostaria%20de%20uma%20informa%C3%A7%C3%A3o' id='whatsapp' className='social-media-links'><FaWhatsapp/></a>
        </div>
    )
}

export default SocialMediaBar
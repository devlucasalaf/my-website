import React, {useState, useEffect} from 'react'

import {SiFastly} from 'react-icons/si'
import {IoPhonePortrait} from 'react-icons/io5'
import {IoRocket} from 'react-icons/io5'

import Image from 'next/image'

import NextPageBtn from '../Components/NextPageBtn/index'
import PrevPageBtn from '../Components/PrevPageBtn/index'
import PageTitle from '../Components/PageTitle/index'

const Sobre = () => {

    const [statusScrollPhoto, setStatusScrollPhoto] = useState(false)
    const [statusScrollSkills, setStatusScrollSkills] = useState(false)

    useEffect(() => {
        setInterval(() => {   
            let scrolled = window.pageYOffset || document.documentElement.scrollTop 
            let currentWidth = window.innerWidth
            let currentHeight = window.innerHeight
            if(currentWidth > 1023 && currentHeight <= 799 ){
                if(scrolled >= 100) {
                    setStatusScrollPhoto(true)
                    setStatusScrollSkills(true)
                } else {
                    return
                } 
            
            } else if(currentWidth > 1023 && currentHeight > 799) {
                setStatusScrollPhoto(true)
                setStatusScrollSkills(true)
            } else if(currentWidth < 1023 && currentHeight <= 899){
                if(scrolled >= 600) {
                setStatusScrollPhoto(true)                
            }  
            } else if (currentWidth < 1023 && currentHeight > 899){
                if(scrolled >=500){
                    setStatusScrollPhoto(true)
                }
            }
        }, 500)

        setInterval(() => {
            let scrolled = window.pageYOffset || document.documentElement.scrollTop 
            let currentWidth = window.innerWidth
            let currentHeight = window.innerHeight
            if(currentWidth < 1023 && currentHeight <= 899) {
                if(scrolled >= 1100) {
                    setStatusScrollSkills(true)
                }                
            } else if(currentWidth < 1023 && currentHeight > 899) {
                if(scrolled >= 800) {
                    setStatusScrollSkills(true)
                }
            }
        }, 500)
    }, [])    

    return (
        <div id='about-container'>
            <PrevPageBtn pageName='home' path='https://my-website-git-main.devlucasalaf.vercel.app/'/>
            <NextPageBtn pageName='projetos' path='https://my-website-git-main.devlucasalaf.vercel.app/projetos'/>  
            <div id='about-wrapper'> 
                <PageTitle title='SOBRE'/>               
                <div id='diference-wrapper'>
                    <div className='diference-box'>
                        <span id='icon-1'><SiFastly/></span>
                        <h2>Agilidade</h2>
                        <p id='dif-text-1'>
                            Tempo de carregamento rápido e interação sem lag, minha maior prioridade.
                        </p>
                    </div>
                    <div className='diference-box'>
                        <span id='icon-2'><IoPhonePortrait/></span>
                        <h2>Responsividade</h2>
                        <p id='dif-text-2'>                            
                            Meus layouts funcionam em qualquer dispositivo, grande ou pequeno.
                        </p>
                    </div>
                    <div className='diference-box'>
                        <span id='icon-3'><IoRocket/></span>
                        <h2>Dinâmico</h2>
                        <p id='dif-text-3'>                            
                            Os sites não precisam ser estáticos, adoro dar vida às páginas.
                        </p>
                    </div>
                </div>
                <div id='skills-wrapper'>
                    <div id={statusScrollPhoto === true ? 'apresentation' : ''} className='apresentation'>
                        <div id='perfil-photo-wrapper'>
                            <Image src='/perfil-atual.jpeg' alt='alo' width={399} height={744}/>
                        </div>
                        <h2>Quem sou eu?</h2>
                        <p>Eu sou Desenvolvedor Front-end pela Fattoria Web no Rio de Janeiro. Tenho muita paixão por desenvolver páginas e sistemas dinâmicos, com efeitos, animações, performance e responsividade. Tornando a aplicação intuitiva e de fácil utilização. <br/> <a href='/contato'>Vamos fazer algo especial!</a></p>
                    </div>
                    <div id={statusScrollSkills === true ? 'skills-box' : ''} className='skills-box'>
                        <div className='skill-bar-wrapper'>
                            <span className='skill'>CSS</span>
                            <span id={statusScrollSkills === true ? 'css-points' : ''} className='skill-bar'></span>
                            <p  className='skill-percent'>80%</p>
                        </div>
                        <div className='skill-bar-wrapper'>
                            <span className='skill'>HTML</span>
                            <span id={statusScrollSkills === true ? 'html-points' : ''} className='skill-bar'></span>
                            <p  className='skill-percent'>80%</p>
                        </div>
                        <div className='skill-bar-wrapper'>
                            <span className='skill'>ReactJS</span>
                            <span id={statusScrollSkills === true ? 'react-points' : ''} className='skill-bar'></span>
                            <p  className='skill-percent'>70%</p>
                        </div>
                        <div className='skill-bar-wrapper'>
                            <span className='skill'>Javascript</span>
                            <span id={statusScrollSkills === true ? 'js-points' : ''} className='skill-bar'></span>
                            <p  className='skill-percent'>70%</p>
                        </div>
                        <div className='skill-bar-wrapper'>
                            <span className='skill'>NodeJS</span>
                            <span id={statusScrollSkills === true ? 'node-points' : ''} className='skill-bar'></span>
                            <p  className='skill-percent'>40%</p>
                        </div>
                    </div>               
                </div>
            </div>        
        </div>
    )
}

export default Sobre
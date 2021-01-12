import React from 'react'

import {SiFastly} from 'react-icons/si'
import {IoPhonePortrait} from 'react-icons/io5'
import {IoRocket} from 'react-icons/io5'

import NextPageBtn from '../Components/NextPageBtn/index'
import PrevPageBtn from '../Components/PrevPageBtn/index'
import PageTitle from '../Components/PageTitle/index'

const Sobre = () => {
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
                    <div id='perfil-photo-wrapper'>
                        <img src="/lucas.jpg" alt="perfil" border="0"></img>
                    </div>
                    <div id='skills-box'>
                        
                    </div>               
                </div>
            </div>        
        </div>
    )
}

export default Sobre
import React from 'react'
import Head from 'next/head'
import Typewriter from 'typewriter-effect'

import NextPageBtn from '../Components/NextPageBtn/index'
import SocialMediaBar from '../Components/SocialMediaBar/index'

export default function Home() {
  return (
    <div id='home-container'>
      <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <SocialMediaBar/>
      <div id='home-wrapper'>
        <h1 className='main-title'>Olá, sou <span className='highlight-name'>Lucas Alves</span>.<br/> Desenvolvedor front-end!</h1>
        <p class='type-writer'>
          <Typewriter 
            onInit={(typeWriter) => {
              typeWriter
                .changeDelay(30)
                .typeString('Atuo com desenvolvimento de interfaces responsivas, amigáveis e dinâmicas. <br/>')
                .typeString('Utilizando as tecnologias do <span style="color:  #b11b5e;">Javascript</span> e do <span style="color:  #b11b5e;">ReactJS</span> como framework.')
                .start();
            }}
          />
        </p>  
        <p> <a href='/projetos'></a></p>     
      </div> 
      <NextPageBtn path='https://my-website-git-main.devlucasalaf.vercel.app/sobre' pageName='sobre'/>
    </div>
  )
}

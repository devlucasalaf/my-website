import React from 'react'
import '../styles/global.css'
import '../styles/Header/styles.css'
import '../styles/Home/styles.css'
import '../styles/SocialMediaBar/styles.css'
import '../styles/NextPageBtn/styles.css'
import '../styles/PrevPageBtn/styles.css'
import '../styles/About/styles.css'
import '../styles/PageTitle/styles.css'
import '../styles/Projetos/styles.css'
import '../styles/Contato/styles.css'

import Header from '../Components/Header/index'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Header/>      
    </div>
  )
}

export default MyApp

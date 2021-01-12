import React from 'react'

import NextPageBtn from '../Components/NextPageBtn/index'
import PrevPageBtn from '../Components/PrevPageBtn/index'
import PageTitle from '../Components/PageTitle/index'

const Projetos = () => {
    return (
        <div id='projects-container'>
            <PrevPageBtn pageName='sobre' path='https://my-website-git-main.devlucasalaf.vercel.app/sobre'/>
            <NextPageBtn pageName='contato' path='https://my-website-git-main.devlucasalaf.vercel.app/contato'/>
            <div id='projects-wrapper'>
                <PageTitle title='PROJETOS'/>
            </div>
        </div>
    )
}

export default Projetos
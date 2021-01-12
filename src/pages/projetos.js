import React from 'react'

import NextPageBtn from '../Components/NextPageBtn/index'
import PrevPageBtn from '../Components/PrevPageBtn/index'
import PageTitle from '../Components/PageTitle/index'

const Projetos = () => {
    return (
        <div id='projects-container'>
            <PrevPageBtn pageName='sobre' path='http://localhost:3000/sobre'/>
            <NextPageBtn pageName='contato' path='http://localhost:3000/contato'/>
            <div id='projects-wrapper'>
                <PageTitle title='PROJETOS'/>
            </div>
        </div>
    )
}

export default Projetos
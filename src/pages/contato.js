import React from 'react'

import PrevPageBtn from '../Components/PrevPageBtn/index'
import PageTitle from '../Components/PageTitle/index'

const Contato = () => {
    return (
        <div id='contato-container'>
            <PrevPageBtn pageName='projetos' path='http://localhost:3000/projetos'/>
            <div id='contato-wrapper'>
                <PageTitle title='CONTATO'/>
            </div>
        </div>
    )
}

export default Contato
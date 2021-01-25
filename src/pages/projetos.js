import React from 'react';

import NextPageBtn from '../Components/NextPageBtn/index'
import PrevPageBtn from '../Components/PrevPageBtn/index'
import PageTitle from '../Components/PageTitle/index'


const Projetos = () => {

    const projects = [
        {
            Name: 'Sneaker',
            Description: 'Projeto de simulação de loja virtual.',
            Language: 'ReactJS',
            Source: '/principal-sneaker.png',
            Site: 'https://online-store.devlucasalaf.vercel.app/'
        },
        {
            Name: 'BeKind',
            Description: 'Projeto de clone da homepage do Vercel.',
            Language: 'ReactJS',
            Source: '/principal-vercel.png',
            Site: 'https://clone-vercel-homepage.devlucasalaf.vercel.app/'
        },
        {
            Name: 'VOB',
            Description: 'Projeto para a ONG Viver o Bem. (Em andamento)',
            Language: 'ReactJS',
            Source: '/principal-vob.png',
            Site: 'https://vob-git-master.devlucasalaf.vercel.app/'
        },
        {
            Name: 'Conversor',
            Description: 'Projeto de conversor de dólar para real.',
            Language: 'ReactJS',
            Source: '/principal-conversor.png',
            Site: 'https://conversor-new-git-master.devlucasalaf.vercel.app/'
        },
    ]


    return (
        <div id='projects-container'>
            <PrevPageBtn pageName='sobre' path='https://my-website-git-main.devlucasalaf.vercel.app/sobre'/>
            <NextPageBtn pageName='contato' path='https://my-website-git-main.devlucasalaf.vercel.app/contato'/>
            <div id='projects-wrapper'>
                <PageTitle title='PROJETOS'/>
                <h2 className='project-subtitle'>Visualize abaixo alguns dos projetos que estou executando ou que já executei.</h2>
                <div className='photos-container'>
                    {projects.map((project) => {
                        return (
                            <div className='project-box' key={project.Name}>
                                <img src={project.Source} alt={project.Name}></img>
                                <div className='project-info'>
                                    <h2>{project.Name}</h2>
                                    <p>{project.Description}</p>
                                </div> 
                                <span>{project.Language}</span>                                                               
                                <a target='blank' href={project.Site}>Visitar Site</a>
                                <div className='shadow-div'></div>
                            </div>
                        )
                    })}
                </div>                
            </div>
        </div>
    )
}

export default Projetos
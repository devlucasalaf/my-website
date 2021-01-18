import React from 'react'

import PrevPageBtn from '../Components/PrevPageBtn/index'
import PageTitle from '../Components/PageTitle/index'

const Contato = () => {
    return (
        <div id='contato-container'>
            <PrevPageBtn pageName='projetos' path='https://my-website-git-main.devlucasalaf.vercel.app/projetos'/>
            <div id='contato-wrapper'>
                <PageTitle title='CONTATO'/>
                <h2 className='contato-subtitle'>Tem alguma dúvida ou quer fazer um trabalho junto? <br/> Mande uma mensagem!</h2>
                <div id='contato-form'>
                    <form method='POST'>                        
                        <input required type='text' className='input-field name' name='name' id='name' placeholder='Digite seu nome.'></input>                    
                        <input required type='text' className='input-field email' name='email' id='email' placeholder='Digite seu melhor e-mail.'></input>                        
                        <textarea required className='input-field message' name='message' id='message' placeholder='Digite sua dúvida ou mensagem.'></textarea>
                        <div id='btn-submit-wrapper'>
                            <button type='submit'>ENVIAR<span id='btn-square'></span></button>
                            <div id='btn-shade'>
                                <span id='shade'></span>
                            </div> 
                        </div>                                           
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contato
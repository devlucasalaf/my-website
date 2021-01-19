import React, {useState} from 'react'

import {HiOutlineX} from 'react-icons/hi'

import PrevPageBtn from '../Components/PrevPageBtn/index'
import PageTitle from '../Components/PageTitle/index'



const Contato = () => {    

    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Mensagem: '', 
        NomeError: '', 
        EmailError: '',    
        MensagemError: '',  
 
      })      

    const [success, setSuccess] = useState(false)

    const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
        ...old,
        [key]: value
    }))   
    }
    
    const onBlur = (evt) => {
        const key = evt.target.name
        const keyNew = key + 'Error'
        if(evt.target.value === '') {
            setForm( old => ({
                ...old,
               [keyNew]  : 'Este campo é de preenchimento obrigatório!'
            }))
        } else {
            setForm( old => ({
                ...old,
                [keyNew]: ''
            }))
        }
    }

    const handleForm = () => {
            const {NomeError, EmailError, MensagemError} = form
            if(form.Nome === ''){
                setForm(old => ({
                    ...old,
                    NomeError: 'Este campo é de preenchimento obrigatório!'
                }))
            } else {
                setForm(old => ({
                    ...old,
                    NomeError: ''
                }))
            }
            if(form.Email === ''){
                setForm(old => ({
                    ...old,
                    EmailError: 'Este campo é de preenchimento obrigatório!'
                }))
            } else {
                setForm(old => ({
                    ...old,
                    EmailError: ''
                }))
            }
            if(form.Mensagem === ''){
                setForm(old => ({
                    ...old,
                    MensagemError: 'Este campo é de preenchimento obrigatório!'
                }))
            } else {
                setForm(old => ({
                    ...old,
                    MensagemError: ''
                }))
            }
    }

    const closeSuccess = () => {
        setSuccess(false)
    }

    const save = async (evt) => {
            evt.preventDefault()

            handleForm()
            
            const {Nome, Email, Mensagem, SuccessStatus, SucessMsg} = form
           
            if(form.Nome && form.Email && form.Mensagem !== '') {

                setForm(old => ({
                    ...old,
                    Nome: '',
                    Email: '',
                    Mensagem: '',
                    
                }))
                setSuccess(true)
                
                try {                
                    const response = await fetch('/api/save-form', {
                      method: 'POST',
                      body: JSON.stringify(form)
                    })                      
      
                  } catch (err) {
                  }  
            }                         
      }
     

    return (
        <div id='contato-container'>
            <PrevPageBtn pageName='projetos' path='https://my-website-git-main.devlucasalaf.vercel.app/projetos'/>
            <div id='contato-wrapper'>
                <PageTitle title='CONTATO'/>
                <h2 className='contato-subtitle'>Tem alguma dúvida ou quer fazer um trabalho junto? <br/> Mande uma mensagem!</h2>
                <div id='contato-form'>
                    <form>                        
                        <input onBlur={onBlur} value={form.Nome} onChange={onChange} required type='text' className='input-field name' name='Nome' id='name' placeholder='Digite seu nome.'></input>
                        <p className={form.NomeError === '' ? 'text-error-off' : 'text-error'}>{form.NomeError}</p>              
                        <input onBlur={onBlur} value={form.Email} onChange={onChange} required type='text' className='input-field email' name='Email' id='email' placeholder='Digite seu melhor e-mail.'></input>
                        <p className={form.EmailError === '' ? 'text-error-off' : 'text-error'}>{form.EmailError}</p>                       
                        <textarea onBlur={onBlur} value={form.Mensagem} onChange={onChange} required className='input-field message' name='Mensagem' id='message' placeholder='Digite sua dúvida ou mensagem.'></textarea>
                        <p className={form.MensagemError === '' ? 'text-error-off' : 'text-error'}>{form.MensagemError}</p>
                        <div className={success === true ? 'sucess' : 'not-sucess'} >
                            <span >Sua mensagem foi enviada com sucesso.</span>
                            <span onClick={closeSuccess}><HiOutlineX/></span>
                        </div>                        
                        <div id='btn-submit-wrapper'>
                            <button type='submit' onClick={save}>ENVIAR<span id='btn-square'></span></button>
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
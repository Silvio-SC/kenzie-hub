import { useContext, useState } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormLoginSchema } from './FormLoginSchema'

import { api } from '../../../services/axios'

import { Input } from '../../Input'
import { StyledButtonGray, StyledButtonPrimary } from '../../Button/style'
import { StyledForm } from '../style'
import { HeadlineBold, Title1 } from '../../../styles/Typography'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { UserContext } from '../../../providers/UserContext'


export const FormLogin = () => {

    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(FormLoginSchema),
    })

    const {navigate, notifySucess, notifyError, setUser} = useContext(UserContext)

    const submit = async (formData) => {
        try {
            setIsLoading(true)
            const { data } = await api.post('/sessions', formData)
            setUser(data.user)
            notifySucess('Login feito com sucesso')
            localStorage.setItem('@Token', data.token)
            navigate('/dashboard')


        } catch (error) {
            console.log(error)
            notifyError('Senha e/ou email estão incorretos')
        } finally {
            setIsLoading(false)
        }
        
        reset()
    }
    
    const MoveToRegister = () => {
        navigate('/register')
    }

    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <Title1 color={'white'} size={16} >Login</Title1>
            <Input label='Email' errors={errors.email} type='email' placeholder='Digite aqui seu email' {...register('email')} />
            <Input label='Senha' errors={errors.password} type='password' placeholder='Digite aqui sua senha' {...register('password')} />
            <StyledButtonPrimary disabled={isLoading}>{isLoading ? 'Entrando...' : 'Entrar'}</StyledButtonPrimary>
            <HeadlineBold color={'gray'} size={12} >Ainda não possui uma conta?</HeadlineBold>
            <StyledButtonGray onClick={MoveToRegister} type='button'>Cadastrar</StyledButtonGray>
            <ToastContainer />
        </StyledForm>
    )
}
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormRegisterSchema } from './FormRegisterSchema'

import { api } from '../../../services/axios'

import { Input } from '../../Input'
import { StyledButtonPrimary } from '../../Button/style'
import { StyledForm } from '../style'
import { Headline, Title1 } from '../../../styles/Typography'
import { Select } from '../../Select'
import { ToastContainer } from 'react-toastify'
import { UserContext } from '../../../providers/UserContext'

export const FormRegister = () => {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(FormRegisterSchema)
    })

    const {navigate, notifySucess, notifyError, isLoading, setIsLoading} = useContext(UserContext)
    
    const submit = async (formData) => {
        try {
            setIsLoading(true)
            const response = await api.post('/users', formData)

            notifySucess('conta cadastrada com sucesso')
            reset()
            setTimeout(() => {
                navigate('/')
            }, 4000)
        } catch (error) {
            console.log(error.response.data.message)
            notifyError(error.response.data.message)
        } finally {
                setIsLoading(false)    
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <Title1 color={'white'} size={18} >Crie sua conta</Title1>
            <Headline color={'gray'} size={12} >Rapido e grátis, vamos nessa</Headline>
            <Input label='Nome' type='text' errors={errors.name} placeholder='Digite aqui seu nome' {...register('name')} />
            <Input label='Email' type='email' errors={errors.email} placeholder='Digite aqui seu email' {...register('email')} />
            <Input label='Senha' type='password' errors={errors.password} placeholder='Digite aqui sua senha' {...register('password')} />
            <Input label='Confirmar Senha' type='password' errors={errors.confirm} placeholder='Digite novamente sua senha' {...register('confirm')} />
            <Input label='Bio' type='text' errors={errors.bio} placeholder='Fale sobre você' {...register('bio')} />
            <Input label='Contato' type='text' errors={errors.contact} placeholder='Opção de contato' {...register('contact')} />
            <Select label='Selecionar módulo' errors={errors.course_module} {...register('course_module')} >
                <option value='' hidden >selecionar módulo</option>
                <option value='Primeiro módulo (Introdução ao Frontend)' >Primeiro módulo</option>
                <option value='Segundo módulo (Frontend Avançado)' >Segundo módulo</option>
                <option value='Terceiro módulo (Introdução ao Backend)' >Terceiro módulo</option>
                <option value='Quarto módulo (Backend Avançado)' >Quarto módulo</option>
            </Select>
            <StyledButtonPrimary disabled={isLoading}>{isLoading ? 'Enviando...' : 'Enviar'}</StyledButtonPrimary>
            <ToastContainer />
        </StyledForm>
    )
}
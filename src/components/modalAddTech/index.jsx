import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TechRegisterSchema } from './TechRegisterSchema'

import { StyledModalAddTech } from './style'
import { StyledForm } from '../Form/style'
import { Input } from '../Input'
import { Select } from '../Select'
import { StyledButtonPrimary } from '../Button/style'
import { Title3 } from '../../styles/Typography'
import { useRef, useState } from 'react'
import { api } from '../../services/axios'
import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'
import { TechContext } from '../../providers/TechContext'



export const ModalAddTech = () => {

    const { setModalAddIsOpen, isLoading, closeModalwithoutButtom} = useContext(UserContext)
    const { createTech } = useContext(TechContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(TechRegisterSchema),
    })

    const modalAddRef = useRef(null)

    const submit = async (formData) => {
        createTech(formData, closeModal, reset)
        // try {
        //     setIsLoading(true)
        //     const { data } = await api.post('/users/techs', formData, {
        //         headers: {
        //             Authorization: `Beader ${Token}`
        //         }
        //     })
        //     setTechList([...techList, data])
        //     notifySucess('Tecnologia cadastrada com sucesso')
        //     closeModal()
        // } catch (error) {
        //     console.log(error)
        //     notifyError('Algo deu errado no cadastro')
        // } finally {
        //     setIsLoading(false)
        // }
        
        // reset()
    }

    const closeModal = () => {
        setModalAddIsOpen(false)
    }

    closeModalwithoutButtom(modalAddRef, closeModal)

    return (
        <StyledModalAddTech>
            <div className='modalBox' ref={modalAddRef}>
                <header>
                    <Title3 size={14} color={'white'}>Cadastrar Tecnologia</Title3>
                    <span onClick={closeModal}>X</span>
                </header>
                <StyledForm onSubmit={handleSubmit(submit)}>
                    <Input label={'Nome'} type={'text'} placeholder={'Digite a Tecnologia'} {...register('title')} errors={errors.title} />
                    <Select label={'Selecionar status'} {...register('status')} errors={errors.status}>
                        <option value='' hidden >Selecione um tecnologia</option>
                        <option value='Iniciante'>Iniciante</option>
                        <option value='Intermediário'>Intermediário</option>
                        <option value='Avançado'>Avançado</option>
                    </Select>
                    <StyledButtonPrimary disabled={isLoading}>{isLoading ? 'Cadastrando' : 'Cadastrar Tecnologia'}</StyledButtonPrimary>
                </StyledForm>
            </div>
        </StyledModalAddTech>
    )
}
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TechEditSchema } from './TechEditSchema'

import { useRef, useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../providers/UserContext'

import { StyledModalAddTech } from './style'
import { StyledForm } from '../../Form/style'
import { Input } from '../../Input'
import { Select } from '../../Select'
import { StyledButtonPrimary, StyledButtonGray } from '../../Button/style'
import { Title3 } from '../../../styles/Typography'
import { ModalConfirm } from '../../ModalConfim'
import { TechContext } from '../../../providers/TechContext'



export const ModalEditTech = () => {

    const [openModalConfirme, setOpenModalConfirme] = useState(false)
    const { setModalEditIsOpen, isLoading, closeModalwithoutButtom } = useContext(UserContext)
    const { selectedTech, editTech, deleteTech } = useContext(TechContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(TechEditSchema),
        defaultValues: {
            title: selectedTech.title,
            status: selectedTech.level
        }
    })

    const modalEditRef = useRef(null)

    const closeModal = () => {
        setModalEditIsOpen(false)
        setOpenModalConfirme(false)
    }

    const submit = async (formData) => {
        await editTech(formData, closeModal, reset )
    }

    const changeModalConfirm = () => {
        setOpenModalConfirme(!openModalConfirme)
    }

    closeModalwithoutButtom(modalEditRef, closeModal)

    return (
        <StyledModalAddTech>
            <div className='modalBox' ref={modalEditRef}>
                <header>
                    <Title3 size={14} color={'white'}>Tecnologia Detalhes</Title3>
                    <span onClick={closeModal}>X</span>
                </header>
                <StyledForm onSubmit={handleSubmit(submit)}>
                    <Input label={'Nome'} type={'text'} disabled placeholder={'Digite a Tecnologia'} {...register('title')} errors={errors.title} />
                    <Select label={'Selecionar status'} {...register('status')} errors={errors.status}>
                        <option value='Iniciante'>Iniciante</option>
                        <option value='Intermediário'>Intermediário</option>
                        <option value='Avançado'>Avançado</option>
                    </Select>
                    <div className='button-div'>
                        <StyledButtonPrimary disabled={isLoading}>{isLoading ? 'Salvando' : 'Salvar Alterações'}</StyledButtonPrimary>
                        <StyledButtonGray onClick={changeModalConfirm} type='button'>Excluir</StyledButtonGray>
                    </div>
                </StyledForm>
            </div>
            {openModalConfirme ? <ModalConfirm message={'Vocé realmente dejesa deletar essa tecnologia?'} confirmCallback={() => deleteTech(closeModal, reset)} refusalCallback={changeModalConfirm} /> : null}
        </StyledModalAddTech>
    )
}
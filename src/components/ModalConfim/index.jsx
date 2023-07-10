import { StyledButtonGray, StyledButtonPrimary } from '../Button/style'
import { Title3 } from '../../styles/Typography'
import { StyledModal } from './style'
import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'



export const ModalConfirm = ({message, confirmCallback, refusalCallback}) => {
    
    const { isLoading } = useContext(UserContext)

    return (
        <StyledModal>
            <div className='modalBox'>
                    <Title3 size={16} color={'primary'} >{message}</Title3>
                    <StyledButtonPrimary onClick={confirmCallback} disabled={isLoading}>{isLoading ? 'Excluindo...' : 'Excluir'}</StyledButtonPrimary>
                    <StyledButtonGray onClick={refusalCallback}>Cancelar</StyledButtonGray>
            </div>
        </StyledModal>
    )
}
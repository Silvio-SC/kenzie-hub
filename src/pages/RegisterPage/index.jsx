import { FormRegister } from '../../components/Form/FormRegister/FormRegister'
import { StyledButtonSmall } from '../../components/Button/style'
import { StyledRegisterPage } from './style'

import logo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom'

export const RegisterPage = () => {

    const navigate = useNavigate()

    const MoveToLogin = () => {
        navigate('/')
    }

    return (
        <StyledRegisterPage>
            <header>
                <img src={logo} alt='logo da Kenzie Hub' />
                <StyledButtonSmall onClick={MoveToLogin}>Voltar</StyledButtonSmall>
            </header>
            <FormRegister MoveToLogin={MoveToLogin} />
        </StyledRegisterPage>
    )
}
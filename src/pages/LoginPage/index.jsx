import logo from '../../assets/Logo.png'
import { FormLogin } from '../../components/Form/FormLogin/FormLogin'
import { Styledloginpage } from './style'

export const LoginPage = () => {
    return (
        <>
            <Styledloginpage>
                <header><img src={logo} alt='logo da Kenzie Hub' /></header>
                <FormLogin />
            </Styledloginpage>
        </>
    )
}
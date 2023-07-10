import { useContext } from 'react'

import { UserContext } from '../../providers/UserContext'

import { ToastContainer } from 'react-toastify'

import logo from '../../assets/Logo.png'
import { StyledDashboardMain } from './style'
import { StyledButtonSmall } from '../../components/Button/style'
import { HeadlineBold, Title1 } from '../../styles/Typography'

import { SectionTech } from '../../components/SectionTech'
import { ModalAddTech } from '../../components/modalAddTech'
import { ModalEditTech } from '../../components/SectionTech/ModalEditTech'


export const Dashboard = () => {

    const {user, setUser, modalAddIsOpen, navigate, modalEditIsOpen } = useContext(UserContext) 
    
    const Logout = () => {
        localStorage.removeItem('@Token')
        setUser(null)
        navigate('/')
    }

    return (
        <>
            <StyledDashboardMain>
                <header>
                    <img src={logo} alt='Logo da Kenzie Hub' />
                    <StyledButtonSmall onClick={Logout} >Sair</StyledButtonSmall>
                </header>
                <section className='userSection'>
                    <Title1 size={18} color={'white'}>Olá, {user.name} </Title1>
                    <HeadlineBold size={12} color={'gray'}>{user.course_module}</HeadlineBold>
                </section>
                <SectionTech />
                <ToastContainer />
            </StyledDashboardMain>
            {modalAddIsOpen ? <ModalAddTech /> : null}
            {modalEditIsOpen ? <ModalEditTech /> : null}
        </>
    )
}
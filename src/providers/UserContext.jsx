import { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../services/axios'

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

    const navigate = useNavigate()

    const currentPath = window.location.pathname

    useEffect(() => {
        const getUser = async () => {
            setIsLoading(true)
            const Token = localStorage.getItem('@Token')
            try {
                const { data } = await api.get(`/profile`, {
                    headers: {
                        Authorization: `Beader ${Token}`
                    }
                })
                setUser(data)
                navigate(currentPath)
                console.log(currentPath)
            } catch (error) {
                // console.log(error.message)
            } finally {
                setIsLoading(false)
            }
        }
    
        getUser()
    }, [])
    
    const notifyError = (message) => {
        toast.error(message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            });
    }
    const notifySucess = (message) => {
        toast.success(message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            });
    }


    const closeModalwithoutButtom = (modalRef, setModal) => {
        useEffect(() => {
            const handleOutClick = (event) => {
                if(!modalRef.current?.contains(event.target)){
                    setModal(false)
                }
            }

            const handleKeyDown = (event) => {
                if(event.key === 'Escape'){
                    setModal(false)
                }
            }
        
            window.addEventListener('mousedown', handleOutClick)
            window.addEventListener('keydown', handleKeyDown)

            return () => {
                window.removeEventListener('mousedown', handleOutClick)
                window.removeEventListener('keydown', handleKeyDown)
            }
        }, [])

    }
    
    return (
        <UserContext.Provider value={
            {user, setUser, modalAddIsOpen, setModalAddIsOpen, navigate,
                modalEditIsOpen, setModalEditIsOpen, closeModalwithoutButtom, 
                notifyError, notifySucess, isLoading, setIsLoading}
            }>
            {children}
        </UserContext.Provider>
    )
}
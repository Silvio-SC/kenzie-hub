import { useContext, useState } from 'react'
import { createContext } from 'react'
import { UserContext } from './UserContext'
import { api } from '../services/axios'


export const TechContext = createContext({})

export const TechProvider = ({children}) => {

    const [techList, setTechList] = useState([])
    const [selectedTech, setSelectedTech] = useState({})
    
    const { notifySucess, notifyError, setIsLoading } = useContext(UserContext)

    const Token = localStorage.getItem('@Token')

    const createTech = async (formData, closeModal, reset) => {
        try {
            setIsLoading(true)
            const { data } = await api.post('/users/techs', formData, {
                headers: {
                    Authorization: `Beader ${Token}`
                }
            })
            setTechList([...techList, data])
            notifySucess('Tecnologia cadastrada com sucesso')
            closeModal()
        } catch (error) {
            console.log(error)
            notifyError('Algo deu errado no cadastro')
        } finally {
            setIsLoading(false)
        }
        
        reset()
    }

    const editTech = async (formData, closeModal, reset) => {
        try {
            setIsLoading(true)
            const { data } = await api.put(`/users/techs/${selectedTech.id}`, formData, {
                headers: {
                    Authorization: `Beader ${Token}`
                }
            })
            notifySucess('Tecnologia Atualizada')
            let userUpdated = techList.map((tech) => {
                if(tech.id === selectedTech.id){
                    return { ...tech, ...data}
                } else {
                    return tech
                }
            })
            setTechList(userUpdated)
            closeModal()
        } catch (error) {
            console.log(error)
            notifyError('Algo deu errado')
        } finally {
            setIsLoading(false)
        }
        
        reset()
    }

    const deleteTech = async (closeModal, reset) => {
        try {
            const { data } = await api.delete(`/users/techs/${selectedTech.id}`, {
                headers: {
                    Authorization: `Beader ${Token}`
                }
            })
            setIsLoading(true)
            notifySucess('Tecnologia deletada com sucesso')
            let userUpdated = techList.filter((tech) => tech.id !== selectedTech.id)
            setTechList(userUpdated)
            closeModal()
        } catch (error) {
            console.log(error)
            notifyError('Algo deu errado')
        } finally {
            setIsLoading(false)
        }
        
        reset()
    }

    return (
        <TechContext.Provider value={
            { techList, setTechList, selectedTech, setSelectedTech, 
                editTech, deleteTech , createTech
            }
            }>
            {children}
        </TechContext.Provider>
    )
}
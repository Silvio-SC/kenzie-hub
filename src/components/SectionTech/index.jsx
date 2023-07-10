import { StyledSectionTech} from './style'
import { Title2 } from '../../styles/Typography'
import { StyledButtonSquare } from '../Button/style'
import { TechCard } from './TechCard'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../providers/UserContext'
import { TechContext } from '../../providers/TechContext'



export const SectionTech = () => {

    const { user, setModalAddIsOpen } = useContext(UserContext)
    const { techList, setTechList } = useContext(TechContext)

    const OpenModal = () => {
        setModalAddIsOpen(true)
    }

    useEffect(() => {
        setTechList(user.techs)
    }, [])

    return (
        <StyledSectionTech>
            <header>
                <Title2 size={12}>Tecnologias</Title2>
                <StyledButtonSquare onClick={OpenModal}>+</StyledButtonSquare>
            </header>
            <div>
                {techList ? techList.map((tech) => <TechCard title={tech.title} level={tech.status} id={tech.id} key={tech.id} />)
                : <Title2 size={16} >Não há tecnologias cadastradas</Title2>
                }
            </div>
        </StyledSectionTech>
    )
}
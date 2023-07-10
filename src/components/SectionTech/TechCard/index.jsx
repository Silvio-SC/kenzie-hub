import { useContext } from 'react'
import { StyledTechCard} from './style'
import { UserContext } from '../../../providers/UserContext'
import { TechContext } from '../../../providers/TechContext'

export const TechCard = ({title, level, id}) => {

    const { setModalEditIsOpen } = useContext(UserContext)
    const { setSelectedTech } = useContext(TechContext)

    const OpenModal = () => {
        setModalEditIsOpen(true)
        setSelectedTech({title, level, id})
    }

    return (
        <StyledTechCard onClick={OpenModal}>
            <h3>{title}</h3>
            <p>{level}</p>
        </StyledTechCard>
    )
}
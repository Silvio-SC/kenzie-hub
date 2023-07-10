import { forwardRef } from 'react'
import { Headline } from '../../styles/Typography'
import { StyledInput, StyledInputDiv, StyledLabel } from './style'




export const Input = forwardRef(({label, errors, ...rest}, ref) => {
    return (
        <StyledInputDiv>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput ref={ref} errors={errors} {...rest} />
            {errors ? <Headline size={12} >{errors.message}</Headline> : null}
        </StyledInputDiv>
    )
})
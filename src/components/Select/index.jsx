import { StyledLabel, StyledSelect, StyledSelectDiv } from './style'
import { Headline } from '../../styles/Typography'
import { forwardRef } from 'react'



export const Select = forwardRef(({label, errors, children, ...rest}, ref) => {
    return (
        <StyledSelectDiv>
            <StyledLabel>{label}</StyledLabel>
            <StyledSelect ref={ref} errors={errors} {...rest}>
                {children}
            </StyledSelect>
            {errors ? <Headline size={12} >{errors.message}</Headline> : null}
        </StyledSelectDiv>
    )
})
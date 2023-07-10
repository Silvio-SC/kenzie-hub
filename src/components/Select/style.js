import styled, { css } from 'styled-components';

export const StyledSelect = styled.select`
    padding: 0.625rem 1rem;
    background-color: var(--Color-gray-2);
    border: 1px solid var(--Color-gray-2);
    border-radius: 4px;

    color: var(--Color-gray-0);
    font-size: 1rem;

    ::placeholder {
        color: var(--Color-gray-1)
    }

    :focus {
        border-color: var(--Color-gray-0);
    }

    ${({errors}) => {
        if(errors) {
            return css`
                border-color: var(--Color-primary);
            `
        }
    }}
`

export const StyledLabel = styled.label`
    color: var(--Color-gray-0);
    font-size: .75rem;
    padding-bottom: .875rem;
`

export const StyledSelectDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;
`




import styled, { css } from 'styled-components';

const styledButton = css`
    padding: 0.75rem 1.25rem;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    color: var(--Color-gray-0);
`

export const StyledButtonPrimary = styled.button`
    ${styledButton}
    background-color: var(--Color-primary);
    
    :hover {
        background-color: var(--Color-primary-focus);
    }

    &:disabled  {
        background-color: var(--Color-primary-nagative);
    }
`

export const StyledButtonGray = styled.button`
    ${styledButton}
    background-color: var(--Color-gray-1);
    
    :hover {
        background-color: var(--Color-gray-2);
    }
`

export const StyledButtonSmall = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    color: var(--Color-gray-0);

    background-color: var(--Color-gray-3);
    
    :hover {
        background-color: var(--Color-gray-2);
    }
`

export const StyledButtonSquare = styled.button`
    padding: 0.5rem .5rem;
    line-height: 1rem;
    width: 2rem;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    color: var(--Color-gray-0);

    background-color: var(--Color-gray-3);
    
    :hover {
        background-color: var(--Color-gray-2);
    }
`
import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 2.75rem 1.25rem;
    border-radius: 4px;
    background-color: var(--Color-gray-3);

    width: clamp(280px, 100%, 380px);
    
    h1, p {
        text-align: center;
    }

    div > p {
        color: var(--Color-primary);
        text-align: start;
    }
`
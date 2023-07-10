import styled from 'styled-components';

export const StyledSectionTech = styled.section`
    padding: 0.625rem 1rem;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    
    > header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    > div {
        padding: 1.25rem clamp(0.5rem, 5vw ,1.25rem);
        background-color: var(--Color-gray-3);

        display: flex;
        flex-direction: column;
        gap: 1rem;

        border-radius: 4px;

        > h2 {
            align-self: center;
        }
    }
`
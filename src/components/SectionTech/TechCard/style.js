import styled from 'styled-components';

export const StyledTechCard = styled.div`
    background-color: var(--Color-gray-4);
    
    padding: 0.75rem;
    border-radius: 4px;

    display: flex;
    justify-content: space-between;
    
    h3 {
        font-size: 0.75rem;
        font-family: var(--font);
        font-weight: 700;
        color: var(-Color-gray-0);
    }
    p {
        font-size: 0.675rem;
        font-family: var(--font);
        color: var(-Color-gray-1);
    }

    &:hover {
        background-color: var(--Color-gray-2);
        
        p {
            color: var(-Color-gray-1);
        }
    }

`

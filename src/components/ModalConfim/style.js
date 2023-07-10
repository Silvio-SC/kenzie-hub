import styled from 'styled-components';

export const StyledModal = styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.3);

    .modalBox {
        position: relative;
        width: clamp(200px, 100%, 300px);
        margin: 0 2rem;
        background-color: var(--Color-gray-3);
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 1.25rem;
    }
`
import styled from 'styled-components'

export const StyledRegisterPage = styled.main`
   width: 100%;
   display: flex;  
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1.25rem;

   padding: 8rem 1rem 5rem 1rem;

   img {
      width: 110px;
      height: auto;
   }

   header {
      display: flex;
      align-items: center;
      gap: clamp(115px, 205px, 205px);
   }
`
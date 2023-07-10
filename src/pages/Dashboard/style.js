import styled from 'styled-components'

export const StyledDashboardMain = styled.main`
    width: 100%;

   > header {
        display: flex;  
        justify-content: space-between;
        align-items: center;

        width: 100%;
        padding: 1rem 4% 1.5rem 4%;

        border-bottom: 1px solid var(--Color-gray-3);
   }
   
    .userSection {
        border-bottom: 1px solid var(--Color-gray-3);
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

   section {
        display: flex;  
        flex-direction: column;
        gap: .75rem;

        padding: 2rem 4%;
   }

   @media screen and (min-width: 768px){
        > header {
            padding: 2rem 15%;
        }

        section{
            padding: 3rem 15%;
        }
   }

   @media screen and (min-width: 1440px){
        > header {
            padding: 2rem 25%;
        }

        section{
            padding: 3rem 25%;
        }
   }
`
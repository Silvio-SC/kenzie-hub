import styled from 'styled-components';

export const StyledModalAddTech = styled.div`
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
        width: clamp(260px, 100%, 380px);
        margin: 0 2rem;
        background-color: #fff;
        border-radius: 5px;


        header {
            background-color: var(--Color-gray-2);
            display: flex; 
            justify-content: space-between;
            padding: .75rem 1.25rem;

            border-top-left-radius: 4px;
            border-top-right-radius: 4px;


            span {
                color: var(--Color-gray-1)
            }

            span:hover  {
                    color: var(--Color-gray-0);
                    cursor: pointer;
                }
        }

        form {
            border-top-left-radius: 0;
            border-top-right-radius: 0;

            :hover {
                
            }
        }
    }
`
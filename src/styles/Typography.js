import styled, { css } from 'styled-components'

const base = css`
    font-family: var(--font);
    
    ${({color}) => {
        if (color === 'white') {
            return css`
                color: var(--Color-gray-0);
            `
        }else if (color === 'gray') {
            return css`
                color: var(--Color-gray-1);
            `
        } else if (color === 'primary') {
            return css`
                color: var(--Color-primary);
            `
        }
    }}
    ${({size}) => {
        return css`
                font-size: ${size/16}rem;
            `
    }}
`

export const Title1 = styled.h1`
    ${base}
    font-weight: bold;
`

export const Title2 = styled.h2`
    ${base}
    font-weight: bold;
`

export const Title3 = styled.h3`
    ${base}
    font-weight: bold;
`

export const Headline = styled.p`
    ${base}
    font-weight: 400;
`

export const HeadlineBold = styled.p`
    ${base}
    font-weight: bold;
`

export const HeadlineItalic = styled.p`
    ${base}
    font-weight: 400;
    font-style: italic;
`


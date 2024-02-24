import styled from 'styled-components'

export const NotFoundContainer = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        color:#ffffff;
        min-height:100vh;
        width:100vw;

       
`
export const NotFoundImage = styled.img`
        height:100vh;
        width:100%;
        @media screen and (min-width:576px)
        {
                display:none
        }
`

export const NotFoundImageDesktop = styled.img`
        height:100vh;
        width:100%;
        @media screen and (max-width:576px)
        {
                display:none;
        }
`

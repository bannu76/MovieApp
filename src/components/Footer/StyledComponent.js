import styled from 'styled-components'

export const FooterContainer = styled.div`

    margin-top:20vh;    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#ffffff;
`
export const MediaIconsContainer = styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        width:50%;
        justify-content:space-around;

        @media screen and (min-width:576px)
        {
            width:18%;
        }
`
export const MediaButton = styled.button`
    background-color:transparent;
    border-style:none;
    out-line:none;
    color:#ffffff;
    padding:4%;
    width:20%;




`

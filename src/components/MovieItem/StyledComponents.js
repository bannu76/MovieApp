import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const ItemContainer = styled.li`
    width:26%;
    border-radius:4px;
       
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:3%;
    height:8em;

    @media screen and (min-width:576px)
    {
        width:22%;
        margin:1%;
        height:16em;
    }
    
`

export const CustomLink = styled(Link)`

    text-decoration:none;
    height:100%;
    width:100%
 
`
export const MovieImage = styled.img`
    height:100%;
    width:100%;
    border-radius:4px;
`

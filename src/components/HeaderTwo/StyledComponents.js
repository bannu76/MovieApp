import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HContainer = styled.div`

    width:100%;
    height:20%;
    background-color:transparent;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:24px;
`

export const WebsiteLogoContainer = styled.div`

    display:flex;
    flex-direction:row;
    align-items:center;
    min-width:40%;
   
    justify-content:space-between;
    

`

export const WebsiteLogo = styled.img`
        width:35%;
        height:25px;

        @media screen and (min-width:576px)
        {
                width:35%;
                height:40px;

        }
        
`
export const SearchNavMenu = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
 
    justify-content:space-between;
  
   min-width:8%;
    

    @media screen and (min-width:576px)
    {
         display:none;   
    }

`

export const SearchInputContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    border-style:solid;
    border-color:#F8FAFC;
    border-width:1px;
    border-radius:4px;
    width:100%;
    height: 25px;

    @media screen and (min-width:576px)
    {
        margin-right:10px;
        height:40px;
         width:60%;
         margin-left:40px;
    }

    
`
export const Input = styled.input`
    border-style:none;
    background-color:transparent;
    width:80%;
   color:#ffffff;
    outline:none;
    margin-left:2px;
    @media screen and (min-width:576px)
    {
        width:70%;
        height:25px;

    }

    
`
export const SearchButton = styled.button`
    color:#ffffff;
   background: #F8FAFC;
background: #FFFFFF;
background: #2C2B2B;
border-style:none;
outline:none;
text-align:center;
border-radius:4px;
width:20%;

padding:3px;
@media screen and (min-width:576px)
{
    
    padding:2px;
    width:32%;
}


`

export const NavMenuButton = styled.button`
    color:#ffffff;
    background-color:transparent;
    border-style:none;
    width:50%;

  cursor: pointer;
  
`

export const NavImage = styled.img`

    width:50%;
    height:25px;

    @media screen and (min-width:576px)
    {
        
    width:48px;
    height:48px;
    }
`
export const HamburgerMenu = styled.div`

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    background-color:#0D0D0D;
    width:100%;
    height:50px;
    padding:2%;
    border-radius:8px;

     @media screen and (min-width:576px)
    {
        display:none;
    }  
    
`
export const NavLink = styled(Link)`
    color:#ffffff;
    text-decoration:none;
    font-size:40%;
    width:80%;

`

export const NavlinkDesk = styled(Link)`
      

       @media screen and (min-width:576px)
       {    
         color:#ffffff;
    text-decoration:none;
    font-size:28px;
    width:18%;
    
        align-self:center;
       }

       @media screen and (max-width:576px)
       {
        display:none;
       }
`
export const CloseHamburgerButton = styled.button`
        color:#ffffff;
    background-color:transparent;
    border-style:none;   
`
export const SearchBoxAvatarContainer = styled.div`

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
     
    width:40%;

    @media screen and (max-width:576px)
    {
        display:none;
    }
`

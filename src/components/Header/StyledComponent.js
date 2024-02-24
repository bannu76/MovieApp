import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:100vw;
    margin-top:0px;
    color:#ffffff; 
    background-color:rgba(0, 0, 0, 0.2); 
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
                width:25%;
                height:60px;

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

export const NavMenuButton = styled.button`
    color:#ffffff;
    background-color:transparent;
    border-style:none;
    
  cursor: pointer;

`
export const NavImage = styled.img`

    width:100%;
    height:2rem;

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
     
    width:20%;

    @media screen and (max-width:576px)
    {
        display:none;
    }
`
export const SearchButton = styled.button`
    background-color:transparent;
    border-style:none;
    outline:none;
    color:#ffffff;
`

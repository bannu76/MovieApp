import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeMainContianer = styled.div`

        display:flex;
        flex-direction:column;
        font-family:Roboto;
        background-color:#131313;
        min-height:100vh;        
`

export const HomeContainer = styled.div`
    background-image:url(${props => {
      return props.bgimage
    }});
    min-height:500px;
    width:100%;
    background-repeat: no-repeat;
   background-size: 100% 100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    color:#ffffff;
`
export const TrendingOriginalsContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 10px;
  
  border-style:solid;
  border-width:2px;
  border-color:yellow;
  background: linear-gradient(116.64deg, rgba(0, 0, 0, 0.8) 0.46%, rgba(0, 0, 0, 0) 100%);

`
export const MovieHeading = styled.h3`
   color:#ffffff;
   margin:6% 0% 0% 4%;
   position:static;
`
export const FailContainer = styled.div`
    display:flex;
     min-height:200px;
     flex-direction:column;
      justify-content:center;
     align-items:center;
     padding:8px;
     text-align:center;
     background-color:#0D0D0D;
     border-radius:8px;
     margin:12px;
`
export const FailImage = styled.img``
export const FailText = styled.p`
  color:#ffffff;
`
export const TryAgain = styled.button`
  background-color:#ffffff;
  padding:8px;
  border-radius:4px;
  font-weight:550;

`
export const LoaderContainer = styled.div`

    display:flex;
     min-height:200px;
     flex-direction:column;
     justify-content:center
     align-items:center;
     text-align:center;
     background-color:#0D0D0D;
     border-radius:8px;
     margin:12px
`
export const MovieName = styled.h1``
export const MovieDes = styled.p``
export const MoviePlayButton = styled.button`
    background-color:#ffffff;
    padding:2%;
    
    font-weight:600;
    border-style:none;
    border-radius:8px;
    outline:none;
    width:22%;
    font-size:100%
    
`
export const Summary = styled.div`
  margin-left:24px;
`

export const HeaderSelfAlign = styled.div``
export const NavLink = styled(Link)`
    color:#ffffff;
    text-decoration:none;
    font-size:40%;
    width:80%;

`
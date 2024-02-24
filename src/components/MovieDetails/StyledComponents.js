import styled from 'styled-components'

export const MoviedetailsContainer = styled.div`

background-color:#131313;
min-height:100vh;
color:#ffffff;
`
export const BackdropContainer = styled.div`
    background-image:url(${props => {
      console.log(props.bgimage)
      return props.bgimage
    }});

    
    width:100%;
    background-repeat: no-repeat;
   background-size: 100% 100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    color:#ffffff;
    
`
export const MovieDetailing = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(24, 24, 24, 0.546875) 38.26%, #131313 92.82%, #131313 98.68%, #131313 108.61%);
   padding:24px;
    
`
export const MovieTitle = styled.h1``

export const RuntimeAdultContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center
     color:#ffffff;
     
     justify-content:space-between;
     width:50%;
     
`
export const AdultDecor = styled.div`

  color:#ffffff;
  border-color:#ffffff;
  border-style:solid;
  height:40px;
  width:24%;
  display:flex;
  font-size:100%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:14%;
  margin-right:5px;
  
`
export const PlayButton = styled.button`
  background-color:#ffffff;
  padding:8px;
  border-radius:4px;
  border-style:none;

  @media screen and (min-width:576px)
  {
   
  }

`

export const SpecificDetailsContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
 

    @media screen and (min-width:576px)
    {
      justify-content:flex-start;      
    }
  
`
export const SpecificDetailsColumnContainer = styled.div`
  display:flex;
  flex-direction:column;
  color:#ffffff;
  
  margin-right:10%;
  height:50%;

`
export const SpecificHeading = styled.p`
  color:#94A3B8;
  font-weight:500;

`
export const SpecificTextUl = styled.ul`
  list-style-type:none;
  padding:0px;
 display:flex;
 flex-direction:column;
  margin-top:18px;
  height:200px;
  
   width:100%;
    
`
export const ListItem = styled.li`
    
    list-style-type:none;
`
export const MoreLikeMovie = styled.ul`
    display:flex;
    flex-direction:row;
    width:100%;
    align-items:center;
    flex-wrap:wrap;
`
export const LoaderContainer = styled.div`

    display:flex;
  
     flex-direction:column;
     justify-content:center
     align-items:center;
     text-align:center;
     background-color:#0D0D0D;
     border-radius:8px;
     margin:12px
`

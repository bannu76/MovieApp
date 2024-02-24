import styled from 'styled-components'

export const SliderContainer = styled.div`
        
        margin:0px 42px 0px 42px;
         

`
export const SlideImage = styled.img`
        
        padding:8%;
        height: 100%;
        border-radius:16px;
        width: 100%;

        @media screen and (min-width:576px)
        {                              
             border-radius:36px;
        }

`
export const SlideImageContainer = styled.div`
        width:100px;
        height:30vh;
        
       
       @media screen and (min-width:576px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
         height:50vh;     
       border-style:solid;
       border-width:2px;
       border-color:yellow;
       }       
`

import styled from 'styled-components'

export const PopularContainer = styled.div`
    min-height: 100vh;
    background-color: #131313;
`
export const UnorderSearchList = styled.ul`
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100%;
    flex-wrap:wrap;
    list-style-type:none;
    padding:0px;
    border-style:solid;
    border-color:yellow;
    border-width:1px;
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

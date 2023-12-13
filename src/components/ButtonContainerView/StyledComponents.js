import styled from 'styled-components/macro'

export const ButtonContainer = styled.li`
  list-style-type: none;
  width: 40%;
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const ButtonImage = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    height: 180px;
    width: 180px;
    margin: 0;
  }
`

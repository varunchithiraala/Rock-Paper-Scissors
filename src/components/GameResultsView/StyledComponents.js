import styled from 'styled-components/macro'

export const GameResultsViewContainer = styled.div`
  width: 70%;
  margin-top: 60px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const UserAndOpponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-right: 40px;
  }
  @media screen and (min-width: 992px) {
    margin-right: 60px;
  }
`

export const ChoiceText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  margin: 8px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const OpponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 60px;
  }
`

export const ResultText = styled.p`
  text-align: center;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin: 10px;
  }
`

export const ResultImage = styled.img`
  width: 160px;
  @media screen and (min-width: 768px) {
    width: 180px;
  }
`

export const ResultButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PlayAgainButton = styled.button`
    color: #223a5f;
    background-color; #ffffff;
    font-family: 'Bree Serif';
    font-size: 16px;
    width: 60%;
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      width: 30%;
      max-width: 200px;
      margin-bottom: 45px;
    }
`

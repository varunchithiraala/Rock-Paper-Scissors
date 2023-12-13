import styled from 'styled-components/macro'

export const RockPaperScissorsContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ScoreCardContainer = styled.div`
  width: 95%;
  border: 3px solid #ffffff;
  border-radius: 10px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 70%;
    padding: 0px 40px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`

export const CardContainer = styled.div`
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const CardContainerHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 26px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  width: 30%;
  max-width: 200px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 15px 40px;
    border-radius: 15px;
  }
`

export const ScoreHeading = styled.p`
  text-align: center;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 6px;
  }
`

export const ScoreValue = styled.p`
  text-align: center;
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 52px;
  }
`

export const PopupConatiner = styled.div`
  width: 95%;
  margin: 10px;
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

export const PopupButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 12px 25px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RulesImage = styled.img`
  width: 80%;
  margin-top: 5px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`

export const CloseButtonContainer = styled.div`
  align-self: flex-end;
`

export const CloseButton = styled.button`
  background-color: transparent;
  font-size: 12px;
  border: 0;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const ChoiceButton = styled.button`
  background-color: transparent;
  height: 40%;
  width: 100%;
  padding: 0;
  border: none;
  margin-top: 60px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    height: 20%;
    width: 45%;
  }
  @media screen and (min-width: 992px) {
    width: 35%;
  }
`

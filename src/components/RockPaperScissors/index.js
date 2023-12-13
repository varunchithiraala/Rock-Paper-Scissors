import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ButtonContainerView from '../ButtonContainerView'
import GameResultsView from '../GameResultsView'

import 'reactjs-popup/dist/index.css'
import {
  RockPaperScissorsContainer,
  ScoreCardContainer,
  CardContainer,
  CardContainerHeading,
  ScoreContainer,
  ScoreHeading,
  ScoreValue,
  PopupConatiner,
  PopupButton,
  RulesContainer,
  RulesImage,
  CloseButtonContainer,
  CloseButton,
  ChoiceButton,
} from './StyledComponents'

class RockPaperScissors extends Component {
  state = {
    isPlaying: false,
    myChoice: [],
    systemChoice: [],
    gameScore: 0,
    resultText: '',
  }

  onClickPlayAgain = () => {
    this.setState({isPlaying: false})
  }

  onGetGameView = (id, imageUrl) => {
    const {choicesList} = this.props
    const randomValue = Math.floor(Math.random() * choicesList.length)

    if (choicesList[randomValue].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, imageUrl],
        systemChoice: choicesList[randomValue],
        gameScore: prevState.gameScore + 1,
        resultText: 'YOU WON',
      }))
    } else if (choicesList[randomValue].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, imageUrl],
        systemChoice: choicesList[randomValue],
        gameScore: prevState.gameScore - 1,
        resultText: 'YOU LOSE',
      }))
    } else if (choicesList[randomValue].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, imageUrl],
        systemChoice: choicesList[randomValue],
        gameScore: prevState.gameScore + 1,
        resultText: 'YOU WON',
      }))
    } else if (choicesList[randomValue].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, imageUrl],
        systemChoice: choicesList[randomValue],
        gameScore: prevState.gameScore - 1,
        resultText: 'YOU LOSE',
      }))
    } else if (choicesList[randomValue].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, imageUrl],
        systemChoice: choicesList[randomValue],
        gameScore: prevState.gameScore + 1,
        resultText: 'YOU WON',
      }))
    } else if (choicesList[randomValue].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, imageUrl],
        systemChoice: choicesList[randomValue],
        gameScore: prevState.gameScore - 1,
        resultText: 'YOU LOSE',
      }))
    } else {
      this.setState({
        isPlaying: true,
        myChoice: [id, imageUrl],
        systemChoice: choicesList[randomValue],
        resultText: 'IT IS DRAW',
      })
    }
  }

  renderGameResultsView = () => {
    const {myChoice, systemChoice, resultText} = this.state

    return (
      <GameResultsView
        myChoice={myChoice}
        systemChoice={systemChoice}
        resultText={resultText}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  renderButtonContainerView = () => {
    const {choicesList} = this.props

    return (
      <ChoiceButton>
        {choicesList.map(eachChoice => (
          <ButtonContainerView
            key={eachChoice.id}
            buttonItems={eachChoice}
            onGetGame={this.onGetGameView}
          />
        ))}
      </ChoiceButton>
    )
  }

  render() {
    const {gameScore, isPlaying} = this.state

    return (
      <RockPaperScissorsContainer>
        <ScoreCardContainer>
          <CardContainer>
            <CardContainerHeading>
              ROCK <br />
              PAPER <br />
              SCISSORS
            </CardContainerHeading>
          </CardContainer>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <ScoreValue>{gameScore}</ScoreValue>
          </ScoreContainer>
        </ScoreCardContainer>
        {isPlaying
          ? this.renderGameResultsView()
          : this.renderButtonContainerView()}
        <PopupConatiner>
          <Popup
            modal
            trigger={
              <PopupButton type="button" position="right center">
                RULES
              </PopupButton>
            }
          >
            {close => (
              <RulesContainer>
                <CloseButtonContainer type="button" onClick={() => close()}>
                  <CloseButton>
                    <RiCloseLine />
                  </CloseButton>
                </CloseButtonContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesContainer>
            )}
          </Popup>
        </PopupConatiner>
      </RockPaperScissorsContainer>
    )
  }
}

export default RockPaperScissors

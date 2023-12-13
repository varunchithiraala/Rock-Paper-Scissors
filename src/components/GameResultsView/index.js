import {
  GameResultsViewContainer,
  UserAndOpponentContainer,
  UserContainer,
  ChoiceText,
  OpponentContainer,
  ResultText,
  ResultImage,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledComponents'

const GameResultsView = props => {
  const {myChoice, systemChoice, resultText, playAgain} = props
  const {imageUrl} = systemChoice

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <GameResultsViewContainer>
      <UserAndOpponentContainer>
        <UserContainer>
          <ChoiceText>YOU</ChoiceText>
          <ResultImage src={myChoice[1]} alt="your choice" />
        </UserContainer>
        <OpponentContainer>
          <ChoiceText>OPPONENT</ChoiceText>
          <ResultImage src={imageUrl} alt="opponent choice" />
        </OpponentContainer>
      </UserAndOpponentContainer>
      <ResultButtonContainer>
        <ResultText>{resultText}</ResultText>
        <PlayAgainButton type="button" onClick={onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultButtonContainer>
    </GameResultsViewContainer>
  )
}

export default GameResultsView

import {ButtonContainer, Button, ButtonImage} from './StyledComponents'

const ButtonContainerView = props => {
  const {buttonItems, onGetGame} = props
  const {id, imageUrl} = buttonItems
  const testCaseId = id.toLowerCase()

  const onClickGetGame = () => {
    onGetGame(id, imageUrl)
  }

  return (
    <ButtonContainer>
      <Button
        type="button"
        onClick={onClickGetGame}
        data-testid={`${testCaseId}Button`}
      >
        <ButtonImage src={imageUrl} alt={id} />
      </Button>
    </ButtonContainer>
  )
}

export default ButtonContainerView

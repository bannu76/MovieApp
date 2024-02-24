import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundImageDesktop,
} from './StyledComponents'

const NotFound = props => {
  const goHome = () => {
    const {history} = props
    history.replace('/')
  }

  console.log('hi')

  return (
    <NotFoundContainer>
      <NotFoundImage
        src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708780868/Page_not_found_bveq5l.png"
        alt="not found"
      />

      <NotFoundImageDesktop
        src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708780898/Page_not_found_1_o2jltd.png"
        alt="not found"
      />
    </NotFoundContainer>
  )
}
export default NotFound

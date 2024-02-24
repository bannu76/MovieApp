import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import {
  MediaIconsContainer,
  FooterContainer,
  MediaButton,
} from './StyledComponent'

const Footer = () => {
  console.log()

  return (
    <FooterContainer>
      <MediaIconsContainer>
        <MediaButton>
          <FaGoogle />
        </MediaButton>

        <MediaButton>
          <FaTwitter />
        </MediaButton>

        <MediaButton>
          <FaInstagram />
        </MediaButton>
        <MediaButton>
          <FaYoutube />
        </MediaButton>
      </MediaIconsContainer>
      <p>Contact Us</p>
    </FooterContainer>
  )
}

export default Footer

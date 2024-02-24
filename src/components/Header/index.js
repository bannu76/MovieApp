import {useState} from 'react'
import {IoMdCloseCircle} from 'react-icons/io'
import {HiOutlineSearch} from 'react-icons/hi'

import {
  HeaderContainer,
  WebsiteLogo,
  SearchNavMenu,
  NavMenuButton,
  NavImage,
  HamburgerMenu,
  NavLink,
  CloseHamburgerButton,
  WebsiteLogoContainer,
  NavlinkDesk,
  SearchButton,
  SearchBoxAvatarContainer,
} from './StyledComponent'

const Header = () => {
  const [toggleFlag, setToggleFlag] = useState(false)

  const togggleMenu = () => {
    setToggleFlag(!toggleFlag)
  }

  const renderMenuItems = () => (
    <HamburgerMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/popular">Popular</NavLink>
      <NavLink to="/account">Account</NavLink>
      <CloseHamburgerButton onClick={togggleMenu}>
        <IoMdCloseCircle />
      </CloseHamburgerButton>
    </HamburgerMenu>
  )

  return (
    <div>
      <HeaderContainer>
        <WebsiteLogoContainer>
          <WebsiteLogo
            src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708155229/Group_7399_wdd87l.png"
            alt="login website logo"
          ></WebsiteLogo>

          <NavlinkDesk to="/">Home</NavlinkDesk>
          <NavlinkDesk to="/popular">Popular</NavlinkDesk>
        </WebsiteLogoContainer>

        <SearchNavMenu>
          <NavLink to="/search">
            <SearchButton data-testid="searchButton">
              <HiOutlineSearch size={28} />
            </SearchButton>
          </NavLink>
          <NavMenuButton onClick={togggleMenu}>
            <NavImage
              src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708585606/add-to-queue_1_1_gxya3y.png"
              alt="hamburger"
            />
          </NavMenuButton>
        </SearchNavMenu>

        <SearchBoxAvatarContainer>
          <NavLink to="/search">
            <NavMenuButton>
              <HiOutlineSearch size={28} />
            </NavMenuButton>
          </NavLink>
          <NavLink to="/account">
            <NavImage
              src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708612462/Avatar_p50rni.png"
              alt="avatar"
            ></NavImage>
          </NavLink>
        </SearchBoxAvatarContainer>
      </HeaderContainer>

      {toggleFlag && renderMenuItems()}
    </div>
  )
}
export default Header

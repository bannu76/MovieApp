import {IoMdCloseCircle} from 'react-icons/io'
import {MdOutlineSearch} from 'react-icons/md'
import {useState, useEffect, createContext} from 'react'
import Cookies from 'js-cookie'

import {
  HContainer,
  WebsiteLogoContainer,
  WebsiteLogo,
  SearchNavMenu,
  NavMenuButton,
  HamburgerMenu,
  NavLink,
  NavlinkDesk,
  CloseHamburgerButton,
  SearchBoxAvatarContainer,
  SearchInputContainer,
  Input,
  SearchButton,
  NavImage,
} from './StyledComponents'

const SContext = createContext([])

const HeaderTwo = () => {
  console.log()

  return (
    <div>
      <HContainer>
        <WebsiteLogoContainer>
          <WebsiteLogo
            src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708155229/Group_7399_wdd87l.png"
            alat="website logo"
          />

          <NavlinkDesk to="/">Home</NavlinkDesk>
          <NavlinkDesk to="/popular">Popular</NavlinkDesk>
        </WebsiteLogoContainer>

        <SearchNavMenu>
          <SearchInputContainer>
            <Input type="search" onClick={onSearch} />
            <SearchButton>
              <MdOutlineSearch />
            </SearchButton>
          </SearchInputContainer>
          <NavMenuButton onClick={togggleMenu}>
            <NavImage
              src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708585606/add-to-queue_1_1_gxya3y.png"
              alt="add to queue"
            />
          </NavMenuButton>
        </SearchNavMenu>

        <SearchBoxAvatarContainer>
          <SearchInputContainer>
            <Input
              onChange={changeText}
              placeholder="Search"
              type="search"
              onClick={onSearch}
            />
            <SearchButton>
              <MdOutlineSearch size={28} />
            </SearchButton>
          </SearchInputContainer>

          <NavImage
            src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708612462/Avatar_p50rni.png"
            alt="avatar"
          ></NavImage>
        </SearchBoxAvatarContainer>
      </HContainer>
      {toggleFlag && renderMenuItems()}
    </div>
  )
}

export default HeaderTwo

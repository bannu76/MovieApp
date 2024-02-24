import {IoMdCloseCircle} from 'react-icons/io'
import {MdOutlineSearch} from 'react-icons/md'
import {useState, useEffect, createContext} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {
  HContainer,
  WebsiteLogoContainer,
  WebsiteLogo,
  SearchNavMenu,
  NavMenuButton,
  HamburgerMenu,
  FailContainer,
  FailText,
  FailImage,
  NavLink,
  NavlinkDesk,
  CloseHamburgerButton,
  SearchBoxAvatarContainer,
  SearchInputContainer,
  Input,
  SearchButton,
  NavImage,
  SearchContainer,
  LoaderContainer,
  UnorderSearchList,
  TryAgain,
} from './StyledComponents'

import MovieItem from '../MovieItem'

const apiTerms = {fail: 'fail', success: 'success', progress: 'progress'}

const Search = () => {
  console.log('hi')

  const [apiStatus, setApiStatus] = useState(apiTerms.progress)
  const [searchText, setSearchText] = useState('')
  const [toggleFlag, setToggleFlag] = useState(false)
  const [searchList, setSearchList] = useState([])

  const changeText = event => {
    setSearchText(event.target.value)
  }
  const onSearch = event => {
    setSearchText(event.target.value)
    console.log(event.target.value)
  }

  const token = Cookies.get('jwt_token')

  const options = {
    method: 'GET',
    headers: {
      authorization: `bearer ${token}`,
    },
  }

  const getData = async () => {
    const reponse = await fetch(
      `https://apis.ccbp.in/movies-app/movies-search?search=${searchText}`,
      options,
    )

    if (reponse.ok) {
      const {results} = await reponse.json()
      const updateResults = results.map(item => ({
        backdropPath: item.backdrop_path,
        id: item.id,
        posterPath: item.poster_path,
        title: item.title,
      }))

      setSearchList(updateResults)
      setApiStatus(apiTerms.success)
    } else {
      setApiStatus(apiTerms.fail)
    }
  }

  useEffect(() => {
    getData()
  }, [searchText])

  const togggleMenu = () => {
    setToggleFlag(!toggleFlag)
  }

  const renderMenuItems = () => (
    <HamburgerMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/popular">Popular</NavLink>
      <NavLink to="/accout">Account</NavLink>
      <CloseHamburgerButton onClick={togggleMenu}>
        <IoMdCloseCircle />
      </CloseHamburgerButton>
    </HamburgerMenu>
  )

  const getHeader = () => (
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
            <Input type="search" onChange={onSearch} />
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
              onChange={onSearch}
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

  const renderSearchList = () => (
    <UnorderSearchList>
      {searchList.map(item => (
        <MovieItem item={item} key={item.id} />
      ))}
    </UnorderSearchList>
  )

  const renderLoader = () => (
    <LoaderContainer testid="loader">
      <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
    </LoaderContainer>
  )

  const renderFail = () => (
    <FailContainer>
      <FailImage
        src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708754332/Group_1_cabwfy.png"
        alt="fail"
      />
      <FailText>Something went wrong. Please try again</FailText>
      <TryAgain onClick={getData}>Try Again</TryAgain>
    </FailContainer>
  )

  const renderNoResults = () => (
    <FailContainer>
      <FailImage
        src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708673561/Group_7394_xhodi1.png"
        alt="no movies"
      />
      <FailText>
        Your search for {searchText} did not find any matches.
      </FailText>
    </FailContainer>
  )

  const renderingSearchMovies = () => {
    switch (apiStatus) {
      case apiTerms.progress:
        return renderLoader()
      case apiTerms.success:
        return searchList.length === 0 ? renderNoResults() : renderSearchList()
      case apiTerms.fail:
        return renderFail()
      default:
        return null
    }
  }

  return (
    <SearchContainer>
      {getHeader()}
      {renderingSearchMovies()}
    </SearchContainer>
  )
}
export default Search

import {IoMdCloseCircle} from 'react-icons/io'
import {HiOutlineSearch} from 'react-icons/hi'
import {MdMenu} from 'react-icons/md'
import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import MovieItem from '../MovieItem'
import './index.css'

const apiTerms = {fail: 'fail', success: 'success', progress: 'progress'}

const Search = () => {
  const [apiStatus, setApiStatus] = useState(apiTerms.progress)
  const [searchText, setSearchText] = useState('')
  const [toggleFlag, setToggleFlag] = useState(false)
  const [searchList, setSearchList] = useState([])

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

  const getSearchResult = () => {
    getData()
  }

  const renderMenuItems = () => (
    <div className="hamburger-menu">
      <Link className="link-items" to="/">
        Home
      </Link>
      <Link className="link-items" to="/popular">
        Popular
      </Link>
      <Link className="link-items" to="/accout">
        Account
      </Link>
      <button
        type="button"
        onClick={togggleMenu}
        className="close-hamburger-button"
      >
        <IoMdCloseCircle />
        {}
      </button>
    </div>
  )

  const getHeader = () => (
    <div className="search-header-main-container">
      <div className="search-header-mobile">
        <Link to="/" className="link-image">
          <img
            className="search-header-mobile-img"
            src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708413997/Group_7399header_movie_logo_angb34.png"
            alt="website logo"
          />
        </Link>

        <div className="hamburger-search-container">
          <div className="input-container">
            <input type="search" onChange={onSearch} placeholder="Search" />
            <button type="button" onClick={getSearchResult}>
              <HiOutlineSearch size={24} />
            </button>
          </div>

          <button type="button" onClick={togggleMenu}>
            <MdMenu size={24} />
          </button>
        </div>
      </div>
      {toggleFlag && renderMenuItems()}

      <div className="search-header-desktop">
        <div className="desk-website-logo-container">
          <Link to="/" className="link-image">
            <img
              className="search-header-mobile-img"
              src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708413997/Group_7399header_movie_logo_angb34.png"
              alt="website logo"
            />
          </Link>
        </div>

        <div className="home-popular-search-accout-container-desktop">
          <ul>
            <li>
              <Link className="link-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/popular">
                Popular
              </Link>
            </li>
          </ul>

          <div className="search-accout-container">
            <div className="desk-search-container">
              <input onChange={onSearch} type="search" />
              <button type="button" onClick={getSearchResult}>
                <HiOutlineSearch size={20} />
              </button>
            </div>
            <Link to="/account" className="profile-link">
              <img
                src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708612462/Avatar_p50rni.png"
                alt="profile"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSearchList = () => (
    <ul className="unorder-search-list">
      {searchList.map(item => (
        <MovieItem key={item.id} item={item} />
      ))}
    </ul>
  )

  const renderLoader = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
    </div>
  )

  const renderFail = () => (
    <div className="fail-container">
      <img
        className="fail-image"
        src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708754332/Group_1_cabwfy.png"
        alt="failure view"
      />
      <h1 className="fail-text">Something went wrong. Please try again</h1>
      <button type="button" className="try-again" onClick={getData}>
        Try Again
      </button>
    </div>
  )

  const renderNoResults = () => (
    <div className="fail-container">
      <img
        className="fail-image"
        src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708673561/Group_7394_xhodi1.png"
        alt="no movies"
      />
      <p className="fail-text">
        `Your search for {searchText} did not find any matches`
      </p>
    </div>
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
    <div className="search-container">
      {getHeader()}
      {renderingSearchMovies()}
      <Footer />
    </div>
  )
}
export default Search

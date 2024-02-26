import {useState} from 'react'
import {IoMdCloseCircle} from 'react-icons/io'
import {HiOutlineSearch} from 'react-icons/hi'
import {MdMenu} from 'react-icons/md'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  const [toggleFlag, setToggleFlag] = useState(false)
  const togggleMenu = () => {
    setToggleFlag(!toggleFlag)
  }

  const renderMenuItems = () => {
    console.log()
    return (
      <div className="hamburger-menu">
        <Link className="link-items" to="/">
          Home
        </Link>
        <Link className="link-items" to="/popular">
          Popular
        </Link>
        <Link className="link-items" to="/account">
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
  }

  return (
    <div className="header-container">
      <div className="header-mobile">
        <Link className="website-logo-link" to="/">
          <img
            src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708155229/Group_7399_wdd87l.png"
            alt="website-logo"
          />
        </Link>

        <div className="search-hamburger-container">
          <Link to="/search" className="mobile-link">
            <button type="button" data-testid="searchButton">
              <HiOutlineSearch size={24} />
            </button>
          </Link>
          <button type="button" onClick={togggleMenu}>
            <MdMenu size={24} />
          </button>
        </div>
      </div>

      {toggleFlag && renderMenuItems()}

      <div className="header-desktop">
        <Link to="/" className="logo-link">
          <img
            src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708155229/Group_7399_wdd87l.png"
            alt="website logo"
          />
        </Link>

        <ul>
          <li className="list-item">
            <li>
              <Link className="desktop-link-items" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="desktop-link-items" to="/popular">
                Popular
              </Link>
            </li>
          </li>
          <li className="list-item-accout-search">
            <li>
              <Link to="/search" className="desktop-search-icon">
                <button type="button" data-testid="searchButton">
                  <HiOutlineSearch size={26} />
                </button>
              </Link>
            </li>
            <li>
              <Link to="/account">
                <img
                  src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708612462/Avatar_p50rni.png"
                  alt="profile"
                />
              </Link>
            </li>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header

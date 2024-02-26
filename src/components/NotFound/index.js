import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => {
  console.log()
  return (
    <div className="not-found-container">
      <h1>Lost Your Way</h1>
      <p>
        we are sorry, the page you requested could not be found Please go back
        to the homepage.
      </p>

      <Link className="link-button" to="/">
        <button type="button" className="go-to-home">
          Go To Home
        </button>
      </Link>
    </div>
  )
}
export default NotFound

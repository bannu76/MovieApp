import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  console.log(name)
  const userInput = event => {
    setName(event.target.value)
  }
  const passwordInput = event => {
    setPassword(event.target.value)
  }

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  console.log('login')

  const submitLoginForm = async event => {
    event.preventDefault()
    if (name === '' || password === '') {
      setErrorMsg('Username or Password is Invalid')
    } else {
      const url = 'https://apis.ccbp.in/login'
      const userDetails = {username: name, password}

      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }

      const response = await fetch(url, options)
      const reponseData = await response.json()
      if (response.ok) {
        const jwtToken = reponseData.jwt_token
        onSubmitSuccess(jwtToken)
      } else {
        setErrorMsg(reponseData.error_msg)
      }
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <div className="website-logo-container">
        <img
          className="website-logo"
          src="https://res.cloudinary.com/dcyavhlbc/image/upload/v1708155229/Group_7399_wdd87l.png"
          alt="website logo"
        />
      </div>
      <div className="form-container" onSubmit={submitLoginForm}>
        <form>
          <h1 className="heading">Login</h1>
          <label htmlFor="username">USERNAME</label>
          <input
            className="input-cls"
            type="text"
            onChange={userInput}
            value={name}
            id="username"
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            className="input-cls"
            onChange={passwordInput}
            value={password}
            id="password"
            type="password"
          />
          <button type="button" className="login-button">
            Login
          </button>
          <p className="error-msg">{errorMsg}</p>
        </form>
      </div>
    </div>
  )
}

export default Login

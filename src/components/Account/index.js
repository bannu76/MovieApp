import Cookies from 'js-cookie'

import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Account = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')

    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="account-container">
      <Header />
      <div className="bg-container">
        <div className="card">
          <h1 className="account-heading" colour="#131313">
            Account
          </h1>
          <hr className="divider" />
          <div className="membership-card">
            <p className="account-heading" style={{color: '#94A3B8'}}>
              Member ship
            </p>
            <div className="user-detail-card">
              <p className="para" style={{color: '#1E293B'}}>
                username@gmailcom
              </p>
              <p className="para" style={{color: '#64748B'}}>
                password : *************
              </p>
            </div>
          </div>
          <hr className="divider" />
          <div className="membership-card">
            <p className="acccount-heading" style={{color: '#94A3B8'}}>
              Plan details
            </p>
            <div className="plan-card">
              <p className="u-para-one" style={{color: '#1E293B'}}>
                Premium
              </p>
              <p className="u-para-two" style={{color: '#1E293B'}}>
                Ultra HD
              </p>
            </div>
          </div>
        </div>
        <button type="button" className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
      <Footer />
    </div>
  )
}
export default Account

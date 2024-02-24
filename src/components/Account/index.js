import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import {
  AccountContainer,
  BgContainer,
  Heading,
  Divider,
  Card,
  MemberShipCard,
  UserDetailcard,
  Para,
  PlanCard,
  UPara,
  LogoutButton,
} from './StyledComponents'

const Account = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')

    const {history} = props
    history.replace('/login')
  }

  return (
    <AccountContainer>
      <Header />
      <BgContainer>
        <Card>
          <Heading colour="#131313">Account</Heading>
          <Divider />
          <MemberShipCard>
            <Heading colour="#94A3B8">Member ship</Heading>
            <UserDetailcard>
              <Para colour="#1E293B">username@gmailcom</Para>
              <Para colour="#64748B">password : *************</Para>
            </UserDetailcard>
          </MemberShipCard>
          <Divider />
          <MemberShipCard>
            <Heading colour="#94A3B8">Plan Details</Heading>
            <PlanCard>
              <Para colour="#1E293B">Premium</Para>
              <UPara colour="#1E293B">Ultra HD</UPara>
            </PlanCard>
          </MemberShipCard>
        </Card>
        <LogoutButton onClick={onLogout}>Logout</LogoutButton>
      </BgContainer>
    </AccountContainer>
  )
}
export default Account

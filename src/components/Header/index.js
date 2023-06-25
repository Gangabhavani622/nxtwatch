import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {
  HeaderContainer,
  LogoLink,
  WebsiteLogo,
  ActionContainer,
  DisplayMode,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  Description,
  ButtonsCont,
  CloseBtn,
  ConfirmBtn,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {displayMode, toggleActiveTab, toggleDisplayMode} = value

      const color = displayMode ? '#ffffff' : '#00306e'
      const bgColor = displayMode ? '#181818' : '#ffffff'

      const logoImage = displayMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      const onChangeActiveTab = () => {
        toggleActiveTab('Home')
      }

      const onClickLogout = () => {
        const {history} = props

        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onClickToggleDisplayMode = () => {
        toggleDisplayMode()
      }

      return (
        <HeaderContainer bgColor={bgColor}>
          <LogoLink to="/" onClick={onChangeActiveTab}>
            <WebsiteLogo src={logoImage} />
          </LogoLink>
          <ActionContainer>
            <DisplayMode
              data-testid="theme"
              type="button"
              onClick={onClickToggleDisplayMode}
            >
              {displayMode ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </DisplayMode>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton bgColor={bgColor} color={color} type="button">
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <PopupContainer>
                  <Description>Are you sure, you want to logout?</Description>
                  <ButtonsCont>
                    <CloseBtn
                      data-testid="closeButton"
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseBtn>
                    <ConfirmBtn
                      data-testid="confirmButton"
                      type="button"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </ConfirmBtn>
                  </ButtonsCont>
                </PopupContainer>
              )}
            </Popup>
          </ActionContainer>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)

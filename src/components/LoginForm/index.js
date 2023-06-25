import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  FormContainer,
  Logo,
  InputContainer,
  InputElement,
  LabelElement,
  CheckBoxContainer,
  CheckBoxInput,
  CheckBoxLabel,
  SubmitButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    showPassword: false,
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, option)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  displayLoginPage = () => (
    <ThemeContext.Consumer>
      {() => {
        const {
          username,
          password,
          showPassword,
          showErrorMsg,
          errorMsg,
        } = this.state

        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
          return <Redirect to="/" />
        }

        return (
          <LoginContainer>
            <form onSubmit={this.onSubmitForm}>
              <FormContainer>
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <InputContainer>
                  <LabelElement htmlFor="userName">USERNAME</LabelElement>
                  <InputElement
                    type="text"
                    value={username}
                    id="userName"
                    onChange={this.onChangeUsername}
                  />
                </InputContainer>
                <InputContainer>
                  <LabelElement htmlFor="password">PASSWORD</LabelElement>
                  <InputElement
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    id="password"
                    onChange={this.onChangePassword}
                  />
                </InputContainer>
                <CheckBoxContainer>
                  <CheckBoxInput
                    type="checkbox"
                    onChange={this.onChangeCheckbox}
                    id="checkbox"
                  />
                  <CheckBoxLabel htmlFor="checkbox">
                    Show Password
                  </CheckBoxLabel>
                </CheckBoxContainer>

                <SubmitButton type="submit">Login</SubmitButton>
                {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
              </FormContainer>
            </form>
          </LoginContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return this.displayLoginPage()
  }
}

export default LoginForm

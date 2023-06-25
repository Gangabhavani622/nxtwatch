import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.nav`
   position:fixed;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items:center;
  height:60px;
  width:100%
  background-color:${props => props.bgColor}
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const WebsiteLogo = styled.img`
  width: 25%;
  height: 10%;
  margin-left: 10px;
`

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const DisplayMode = styled.button`
  border: none;
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
`

export const LogoutButton = styled.button`
  background: none;
  border: none;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: #000000;
  text-align: center;
`

export const ButtonsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CloseBtn = styled.div`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
`

export const ConfirmBtn = styled.div`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
`

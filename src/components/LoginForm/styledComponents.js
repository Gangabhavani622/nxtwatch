import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const FormContainer = styled.div`
  display: flex;
  // background-color: #f9f9f9;
  height: 70%;
  width: 35%;
  padding: 30px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 25%;
  height: 10%;
  margin-bottom: 10px;
`

export const InputContainer = styled.div`
  width: 95%;
  margin-top: 10px;
`

export const InputElement = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  outline: none;
  padding: 8px;
  height: 40px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`

export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  color: #475569;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`

export const CheckBoxInput = styled.input`
  height: 15px;
  width: 15px;
  margin-top: 10px;
`

export const CheckBoxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  color: #1e293b;
`
export const SubmitButton = styled.button`
  background-color: #4f46e5;
  height: 40px;
  margin-top: 20px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  width: 100%;
  font-family: 'Roboto';
`
export const ErrorMsg = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: #ff0b37;
`

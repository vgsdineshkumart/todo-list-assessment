import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid #5285EC;
  background: #5285EC 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  width: 124px;
  height: 40px;

  //font: normal normal medium 14px/18px Montserrat;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #FFFFFF;

  cursor: pointer;
`

export const Card = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000000A;
  border-radius: 12px;
  width: auto;
  height: 108px;
  
  display: flex;
  flex-direction: column;
  padding: 24px;
  @media screen and (min-width: 1024px) {
    width: 256px;
  }
`

export const CardWrapper = styled(Card)`
  margin-bottom: 10px;
  @media screen and (min-width: 1024px) {
    flex: 33%;
    margin-left: 24px;
    margin-bottom: 0px;
  }
`

export const Error = styled.div`
  color: red;
  margin: 10px 0px;
`

export const Input = styled.input`
  height: 40px;
  background: #EEF1F8 0% 0% no-repeat padding-box;
  border-radius: 8px;

  text-align: left;
  //font: normal normal medium 14px/18px Montserrat;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  border-color: transparent !important;
  outline: none;
  color: #7A7D7E;
  padding: 0px;
  padding-left: 16px;
  margin-bottom: 12px;
  border: none;
  
  &:focus, &:hover {
    border-color: transparent;
    outline: none;
  }
`

export const Label = styled.label`
  text-align: left;
  //font: normal normal medium 20px/28px Montserrat;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0px;
  color: #537178;
`

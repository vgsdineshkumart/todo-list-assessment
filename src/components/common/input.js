import styled from 'styled-components';

const Input = styled.input`
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

export default Input
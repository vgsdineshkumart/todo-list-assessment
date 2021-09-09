import React from 'react'
import styled from 'styled-components'

const Checkbox = (props) => {
  return (
    <Container>
      <input type="checkbox" {...props} />
      <span></span>
    </Container>
  )
}

const Container = styled.label`
    /* Customize the label (the container) */
    display: block;
    position: relative;
    padding-left: 20px;
    margin-bottom: 18px;
    cursor: pointer;
    user-select: none;

    /* Hide the browser's default checkbox */
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 15px;
      width: 15px;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 2px solid #95A4AB;
      border-radius: 4px;
    }

    /* On mouse-over, add a grey background color */
    &:hover input ~ span {
      background-color: #ccc;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    span:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    input:checked ~ span:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    span:after {
      left: 2px;
      top: -3px;
      width: 20px;
      height: 5px;
      border: solid #707070;
      border-width: 0 0 3px 3px;
      transform: rotate(315deg);
    }
`

export default Checkbox
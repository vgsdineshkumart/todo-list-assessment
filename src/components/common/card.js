import styled from 'styled-components';

const Card = styled.div`
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

export default Card

import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.baseColors.lightGrey};
  width: 300px;
  flex: 1;
  padding-top: 30px;
  padding-left: 35px;
`;


export default { Wrapper };

import styled from 'styled-components';

const TextInput = styled.TextInput`
  flex: 1;
  background-color: ${props => props.theme.white};
  margin-top: 15;
  height: 64;
  ${props => props.rounded && `border-radius: 50;`}
  padding-left: 25;
  padding-right: 25;
  font-size: 20;
`;

export default TextInput;

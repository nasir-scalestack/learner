import styled from 'styled-components';

const Wrapper = styled.ScrollView`
  flex: 1;
  padding-top: 15;
  background: ${props => (props.grey ? props.theme.grey : '#ffffff')};
`;

export default Wrapper;

import styled from 'styled-components';

const Wrapper = styled.ScrollView`
  flex: 1;
  padding-top: 15;
  background: ${props => (props.grey ? props.theme.grey : '#ffffff')};
  padding-left: 30;
  padding-right: 30;
`;

export default Wrapper;

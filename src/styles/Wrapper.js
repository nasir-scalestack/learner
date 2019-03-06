import styled from 'styled-components';

const Wrapper = styled.ScrollView`
  flex: 1;
  padding-top: 15;
  background: ${props => (props.background ? props.background : '#ffffff')};
`;

export default Wrapper;

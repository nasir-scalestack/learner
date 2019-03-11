import styled from 'styled-components';
import normalize from '../helpers/normalizeText';

const Tab = styled.Text`
  color: ${props => (props.active ? '#6665FF' : '#A2AAB5')};
  text-decoration: ${props => props.active && 'underline'};
  text-decoration-color: ${props => (props.active ? '#6665FF' : '#A2AAB5')};
  font-size: ${normalize(20)};
`;

export default Tab;

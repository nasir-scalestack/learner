import styled from 'styled-components';
import normalize from '../helpers/normalizeText';

const baseStyles = styled.Text`
  color: ${props => props.color || '#1F314A'};
`;

const H1 = styled(baseStyles)`
  font-size: ${() => normalize(30)};
`;

const H2 = styled(baseStyles)`
  font-size: ${() => normalize(20)};
`;

const H3 = styled(baseStyles)`
  font-size: ${() => normalize(16)};
`;

const H4 = styled(baseStyles)`
  font-size: ${() => normalize(12)};
`;

const Text = {
  H1,
  H2,
  H3,
  H4,
};

export default Text;

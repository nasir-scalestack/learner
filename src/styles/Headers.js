import styled from 'styled-components';
import normalize from '../helpers/normalizeText';

const baseStyles = styled.Text`
  color: ${props => props.color || '#1F314A'};
  font-family: 'sf-ui-bold';
`;

export const H1 = styled(baseStyles)`
  font-size: ${() => normalize(25)};
`;

export const H2 = styled(baseStyles)`
  font-size: ${() => normalize(16)};
`;

export const H3 = styled(baseStyles)`
  font-size: ${() => normalize(12)};
`;

export const H4 = styled(baseStyles)`
  font-size: ${() => normalize(9)};
`;

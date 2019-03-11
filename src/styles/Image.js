import styled from 'styled-components';

const Image = styled.Image`
  ${props => props.width && `width: ${props.width}`};
  ${props => props.height && `height: ${props.height}`};
  ${props =>
    props.borderRadius || props.rounded
      ? `border-radius: ${
          props.rounded && props.width ? props.width / 2 : props.borderRadius
        };
    overflow: hidden`
      : ``}
  ${props =>
    props.bordered &&
    `border-color: ${props.theme.white};
    border-width: 7`};
  margin-left: auto;
  margin-right: auto;
`;

export default Image;

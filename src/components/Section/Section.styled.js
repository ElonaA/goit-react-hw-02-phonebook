import styled from '@emotion/styled/macro';

export const Container = styled.div`
  padding: 30px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  width: 600px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.black};
  -webkit-box-shadow: ${props => props.theme.colors.shadow};
  -moz-box-shadow: ${props => props.theme.colors.shadow};
  box-shadow: ${props => props.theme.colors.shadow};
  transition: box-shadow ${props => props.theme.animate.transition};

  // &:hover {
  //   -webkit-box-shadow: ${props => props.theme.colors.shadowHover};
  // -moz-box-shadow: ${props => props.theme.colors.shadowHover};
  // box-shadow: ${props => props.theme.colors.shadowHover};
`;

export const Title = styled.h2`
  margin: 0px;
  padding-bottom: 10px;
  font-size: ${props => props.theme.size.title};
  font-weight: 400;
  line-height: 1.4;
  color: ${props => props.theme.colors.white};
  text-align: left;
`;

export const Children = styled.div`
  padding: 15px;
`;

import styled from '@emotion/styled/macro';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.h3`
  margin: 0px;
  padding-bottom: 30px;
  font-size: ${props => props.theme.size.title};
  font-weight: 700;
  line-height: 1.4;
  color: ${props => props.theme.colors.black};
  text-align: left;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-bottom: 40px;
`;

export const Label = styled.p`
  margin: 0px;
  padding-bottom: 10px;
  font-size: ${props => props.theme.size.title};
  font-weight: 400;
  line-height: 1.4;
  color: ${props => props.theme.colors.white};
  text-align: left;
`;

export const Input = styled.input`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 30px;
  border: 2px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.size.subtitle};
  font-weight: 400;
  line-height: 1.4;
  border-radius: 30px;
  width: 93%;
  outline: none;
`;

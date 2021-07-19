import styled from '@emotion/styled/macro';

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 13px 35px;
  margin-top: 15px;
  border: 0;
  border-radius: 50px;
  font-size: ${props => props.theme.size.button};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  border: 2px solid ${props => props.theme.colors.white};
  transition: background-color ${props => props.theme.animate.transition};
  outline: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.blue};
    border: 2px solid ${props => props.theme.colors.blue};
  }
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

export const Form = styled.form`
  width: 100%;
`;

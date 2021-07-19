import styled from '@emotion/styled/macro';
import {
  PersonBadgeFill,
  TelephonePlusFill,
  XCircleFill,
} from '@styled-icons/bootstrap';

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Title = styled.h3`
  margin: 0px;
  margin-right: 40px;
  padding-bottom: 10px;
  font-size: ${props => props.theme.size.review};
  font-weight: 400;
  line-height: 1.4;
  color: ${props => props.theme.colors.white};
  text-align: left;
}
`;

export const Wrapper = styled.div`
padding-top: 10px;
padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
`;

export const Subtitle = styled.h4`
  margin: 0px;
  padding-bottom: 10px;
  font-size: ${props => props.theme.size.subtitle};
  font-weight: 500;
  line-height: 1.3;
  color: ${props => props.theme.colors.white};
  text-align: left;
}
`;
export const Button = styled.button`
  margin-left: auto;
  display: inline-flex;
  border: none;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

export const PersonBadge = styled(PersonBadgeFill)`
  margin-right: 15px;
  color: ${props => props.theme.colors.white};
  width: ${props => props.theme.icon.small};
  &:hover {
    color: ${props => props.theme.colors.blue};
  }
`;

export const TelephonePlus = styled(TelephonePlusFill)`
  margin-right: 15px;
  color: ${props => props.theme.colors.white};
  width: ${props => props.theme.icon.small};
  &:hover {
    color: ${props => props.theme.colors.blue};
  }
`;

export const XCircle = styled(XCircleFill)`
  color: ${props => props.theme.colors.white};
  width: ${props => props.theme.icon.small};

  &:hover {
    color: ${props => props.theme.colors.blue};
  }
`;

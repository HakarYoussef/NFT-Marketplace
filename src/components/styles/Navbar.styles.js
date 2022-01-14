import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const NavbarStyles = styled.div`
  background-color: ${(props) => props.theme.header};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px;

  img {
    width: 120px;
  }
`;

export const SearchStyles = styled.div`
  background-color: ${(props) => props.theme.input};
  width: 30%;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  border-radius: 3px;

  input {
    margin-left: 10px;
    color: ${(props) => props.theme.text};
    width: 100%;
    outline: none;
    border: none;
    background-color: ${(props) => props.theme.input};
    &::placeholder {
      color: ${(props) => props.theme.text};
      opacity: 0.6;
    }
  }
`;

export const NavLinks = styled.a`
  a {
    text-decoration: none;
    margin: 0 20px;
    font-weight: 700;
    color: ${(props) => props.theme.text};
  }
`;

export const SearchIcon = styled(BsSearch)`
  color: ${(props) => props.theme.text};
  opacity: 0.6;
  stroke-width: 0.8px;
`;

export const ConnectStyle = styled.button`
  margin-left: 75px;
  border-radius: 3px;
  padding: 10px 40px;
  background-color: ${(props) => props.theme.primary};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize};
  color: #fff;
  cursor: pointer;
  border: solid 1px #00b7be;
`;
export const LoginStyle = styled.button`
  margin-left: 20px;
  cursor: pointer;
  border-radius: 3px;
  padding: 10px 40px;
  background-color: ${(props) => props.theme.header};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.primary};
  border: solid 1px #00b7be;
`;

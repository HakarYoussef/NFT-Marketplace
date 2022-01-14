import styled from 'styled-components';
import { RiLockFill, RiUser2Fill, RiMailFill } from 'react-icons/ri';

export const SignUpPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5em;
`;
export const SignUpCard = styled.div`
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
  justify-content: space-between;
  padding: 40px;
  border-radius: 5px;
  width: 400px;
  height: 100%;
  input {
    background-color: ${(props) => props.theme.primary};
    padding: 10px;
    width: 100%;
    border-radius: 3px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontSize};
    cursor: pointer;
  }
`;

export const TopText = styled.div`
  h3 {
    color: ${(props) => props.theme.text};
    font-size: 22px;
    font-weight: 700;
  }
`;

export const UserNameWrapper = styled.div`
  background-color: ${(props) => props.theme.bg};
  padding: 10px;
  width: 100%;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 45px;
  margin-top: 30px;
  input {
    background: none;
    border: none;
    outline: 0;
    color: ${(props) => props.theme.text};
    margin-left: 5px;
  }
`;

export const EmailWrapper = styled.div`
  background-color: ${(props) => props.theme.bg};
  padding: 10px;
  width: 100%;
  border-radius: 3px;
  height: 45px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  input {
    background: none;
    border: none;
    outline: 0;
    color: ${(props) => props.theme.text};
    margin-left: 5px;
  }
`;

export const PasswordWrapper = styled.div`
  background-color: ${(props) => props.theme.bg};
  padding: 10px;
  width: 100%;
  border-radius: 3px;
  height: 45px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  input {
    background: none;
    border: none;
    outline: 0;
    color: ${(props) => props.theme.text};
    margin-left: 5px;
  }
`;
export const EmailIcon = styled(RiMailFill)`
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.primary};
`;
export const PersonIcon = styled(RiUser2Fill)`
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.primary};
`;

export const LockIcon = styled(RiLockFill)`
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.primary};
`;

export const SignInPassWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  h4 {
    color: ${(props) => props.theme.text};
    font-weight: 400;
  }
  p {
    color: ${(props) => props.theme.primary};
    margin-left: 5px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 10px;
  input {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  p {
    color: ${(props) => props.theme.text};
    margin-left: 10px;
    font-size: 14px;
  }
`;

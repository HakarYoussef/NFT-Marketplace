import React from 'react';
import {
  SignUpWrapper,
  LockIcon,
  LoginCard,
  LoginPageContainer,
  PasswordWrapper,
  PersonIcon,
  UserNameWrapper,
  WelcomeText,
} from './styles/Login.style';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginCard>
        <WelcomeText>
          <h3>Welcome Back</h3>
          <p>Enter your credentials to access your account.</p>
        </WelcomeText>
        <UserNameWrapper>
          <PersonIcon />
          <input type="text" placeholder="Username or Email" />
        </UserNameWrapper>
        <PasswordWrapper>
          <LockIcon />
          <input type="text" placeholder="Password" />
        </PasswordWrapper>
        <p>Forgot you password?</p>
        <input type="submit" value="Login" />
      </LoginCard>
      <SignUpWrapper>
        <h4>Don't have an account? </h4>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <p>Sign up</p>
        </Link>
      </SignUpWrapper>
    </LoginPageContainer>
  );
}

export default LoginPage;

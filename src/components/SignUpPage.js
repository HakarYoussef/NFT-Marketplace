import React from 'react';
import {
  CheckBoxWrapper,
  EmailIcon,
  EmailWrapper,
  LockIcon,
  PasswordWrapper,
  PersonIcon,
  SignInPassWrapper,
  SignUpCard,
  SignUpPageContainer,
  TopText,
  UserNameWrapper,
} from './styles/SignUpPage.style';
import { Link } from 'react-router-dom';
import Checkbox from './Checkbox';

function SignUpPage() {
  return (
    <SignUpPageContainer>
      <SignUpCard>
        <TopText>
          <h3>Create account</h3>
        </TopText>
        <UserNameWrapper>
          <PersonIcon />
          <input type="text" placeholder="Username" />
        </UserNameWrapper>
        <EmailWrapper>
          <EmailIcon />
          <input type="text" placeholder="Email" />
        </EmailWrapper>
        <PasswordWrapper>
          <LockIcon />
          <input type="text" placeholder="Password" />
        </PasswordWrapper>
        <CheckBoxWrapper>
          <input type="checkbox" />
          <Checkbox />
          <p> I certify I am atleast 18 years old.</p>
        </CheckBoxWrapper>

        <input type="submit" value="Register" />
      </SignUpCard>
      <SignInPassWrapper>
        <h4>Already have an account? </h4>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <p>Sign in</p>
        </Link>
      </SignInPassWrapper>
    </SignUpPageContainer>
  );
}

export default SignUpPage;

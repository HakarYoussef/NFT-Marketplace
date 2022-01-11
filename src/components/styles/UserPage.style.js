import styled from 'styled-components';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { RiGlobalLine } from 'react-icons/ri';

export const UserProfileWrapper = styled.div`
  display: flex;
  margin: 60px;
`;

export const UserLeftSide = styled.div`
  margin-left: 125px;
`;

export const UserDetails = styled.div``;

export const UserWrapper = styled.div`
  img {
    border-radius: 100%;
    width: 100px;
    height: 100px;
  }
`;

export const UserNameWrapper = styled.div`
  /* margin-left: 40px; */
  h1 {
    font-family: 'Fugaz One', cursive;
    font-size: 3rem;
  }
`;

export const LocationIcon = styled(IoLocationOutline)`
  margin-right: 5px;
  font-size: 20px;
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const CCWrapper = styled.div`
  display: flex;
`;

export const Collections = styled.div`
  h1 {
    font-family: 'Fugaz One', cursive;
    font-size: 1.8rem;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Creations = styled.div`
  margin-left: 40px;
  h1 {
    font-family: 'Fugaz One', cursive;
    font-size: 1.8rem;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SocialLinkWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const InstaIcon = styled(AiOutlineInstagram)`
  font-size: 20px;
`;

export const GlobalIcon = styled(RiGlobalLine)`
  font-size: 20px;
`;

export const TwitterIcon = styled(FiTwitter)`
  margin: 0 20px;
  font-size: 20px;
`;

export const BioWrapper = styled.div`
  margin-top: 40px;
  width: 350px;
`;

export const UserPageImagesContainer = styled.div``;
export const UserPageImageWrapper = styled.div``;

import styled from 'styled-components';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { RiGlobalLine } from 'react-icons/ri';

export const UserPageWrapperStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 75px;
`;
export const UserPageSeeMore = styled.div`
  display: flex;
  align-items: center;
  margin-left: 75px;
  color: ${(props) => props.theme.text};
  p {
    margin-left: 10px;
    color: ${(props) => props.theme.primary};
    font-weight: 700;
  }
`;
export const UserRightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserPageImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  /* margin-left: 50px; */
`;

export const UserProfileWrapper = styled.div`
  height: 100vh;
`;

export const UserLeftSide = styled.div`
  margin-left: 175px;
  color: ${(props) => props.theme.text};
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
  h1 {
    color: ${(props) => props.theme.text};
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
    color: ${(props) => props.theme.text};
  }
  p {
    color: ${(props) => props.theme.text};
  }
`;

export const Creations = styled.div`
  margin-left: 40px;
  h1 {
    font-family: 'Fugaz One', cursive;
    font-size: 1.8rem;
    color: ${(props) => props.theme.text};
  }
  p {
    color: ${(props) => props.theme.text};
  }
`;

export const SocialLinkWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const InstaIcon = styled(AiOutlineInstagram)`
  font-size: 20px;
  color: ${(props) => props.theme.text};
`;

export const GlobalIcon = styled(RiGlobalLine)`
  font-size: 20px;
  color: ${(props) => props.theme.text};
`;

export const TwitterIcon = styled(FiTwitter)`
  margin: 0 20px;
  font-size: 20px;
  color: ${(props) => props.theme.text};
`;

export const BioWrapper = styled.div`
  margin-top: 40px;
  width: 350px;
  color: ${(props) => props.theme.text};
`;

export const UserPageImagesContainer = styled.div``;
export const UserPageImageWrapper = styled.div`
  width: 100% !important;
  height: 90% !important;
  max-width: 300px !important;
  max-height: 300px !important;
`;

export const CollectedArtsWrapper = styled.div`
  p {
    color: ${(props) => props.theme.text};
  }
`;
export const IndiviualMarketStyles = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 35px;
  margin-top: 40px;
  margin-left: 45px;
  column-gap: 35px;
  justify-content: flex-start;
  max-width: 100%;
`;

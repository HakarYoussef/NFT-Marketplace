import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { BiFilter } from 'react-icons/bi';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

export const ExplorerStyles = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100% !important;
`;

export const ExplorerArtworksStyles = styled.div`
  background-color: #fff;
  width: 100vw;
  text-align: center;
  border-radius: 5px;
  margin: 70px 20px;
  justify-content: flex-start;
  padding-top: 150px;
  /* overflow: auto; */
  height: 100%;
`;

export const MarketStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 75px;
  margin-left: 25px;
  row-gap: 35px;
  column-gap: 35px;
  justify-content: flex-start;
  max-width: 100%;
`;

export const ExplorerBtns = styled.div`
  display: flex;
`;

export const LatestBtnStyles = styled.button`
  background-color: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 75px;
  margin: 0 10px;
  border-radius: 3px;
  z-index: 20;
  border: 2px solid ${({ theme }) => theme.colors.input};
  font-size: ${({ theme }) => theme.fontSize};
  cursor: pointer;
`;

export const LatestIconDown = styled(MdOutlineKeyboardArrowDown)`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  margin: 0 10px;
  transition: all 0.3s ease-out;
  transform: ${(props) => (props.rotate ? `rotate(180deg)` : '')};
`;

export const FilterBtnStyles = styled.button`
  background-color: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  justify-content: center;
  z-index: 10;
  width: 160px;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.input};
  font-size: ${({ theme }) => theme.fontSize};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    box-shadow: 0 0 0 2px rgba(0, 183, 190, 0.2);
  }
`;

export const FilterIcon = styled(BiFilter)`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  stroke-width: 0.8px;
  margin: 0 10px;
`;

export const ExSearchStyles = styled.div`
  background-color: #fff;
  width: 40%;
  /* z-index: 12; */
  position: absolute;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 6%);
  margin: 40px;

  input {
    margin-left: 10px;
    width: 100%;
    outline: none;
    border: none;
    background-color: #fff;
    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
      opacity: 0.6;
    }
  }
`;
export const ExSearchIcon = styled(BsSearch)`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  stroke-width: 0.8px;
`;

export const LatestDropDownStyles = styled.div`
  background-color: #fff;
  z-index: 11;
  border: 2px solid ${({ theme }) => theme.colors.input};
  margin: 30px -240px;
  padding: 10px 32.5px;
  position: absolute;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 10%);

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 20px;
    list-style: none;
    text-align: start;
  }
  li {
    margin: 15px 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const FilterListStyle = styled.div`
  display: flex;
  width: 95vw;
  background: #fff;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 40px -185px;
  flex-wrap: wrap;
  padding: 10px;
  position: absolute;

  p {
    color: ${({ theme }) => theme.colors.text};
    margin: 10px 30px;
  }
  h5 {
    color: ${({ theme }) => theme.colors.primary};
    margin: 20px 30px;
    cursor: pointer;
  }
`;

export const TagStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 20px;
`;

export const FilterTagStyles = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

export const FilterTagBtnStyle = styled.button`
  background-color: #fff;
  height: 40px;
  display: flex;
  width: auto;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  border-radius: 100px;
  margin: 0 10px;
  border: 2px solid ${({ theme }) => theme.colors.input};
  font-size: ${({ theme }) => theme.fontSize};
  cursor: pointer;
`;

export const SingleCardStyles = styled.div`
  background-color: #fff;
  border: solid 2px ${({ theme }) => theme.colors.input};
  text-align: start;
  padding: 10px 10px;
  height: 620px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 26.8rem));
  transition: transform 250ms;

  img {
    width: 100%;
    cursor: pointer;
  }
  &:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: 0 8px 20px rgba(0, 183, 190, 20%);
  }
  h3 {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.text};
  }
`;
export const MultipleCardStyles = styled.div`
  background-color: #fff;
  border: solid 2px ${({ theme }) => theme.colors.input};
  text-align: start;
  padding: 10px 10px;
  height: 620px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 26.8rem));
  transition: all 0.18s ease-in-out;
  box-shadow: rgba(250, 250, 250, 0.5) 0px 5px,
    rgba(250, 250, 250, 0.3) 0px 10px, rgba(0, 183, 190, 0.8) 0px 13.5px;
  img {
    width: 100%;
    cursor: pointer;
  }
  &:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: 0 8px 20px rgba(0, 183, 190, 20%);
  }
  h3 {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.text};
  }
`;
export const FirstBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SecondBlock = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
`;
export const CardPrice = styled.div`
  p {
    margin: 15px 0;
    color: ${({ theme }) => theme.colors.text};
  }
`;
export const CardEdition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.text};
  }
`;
export const CardCreator = styled.div`
  /* margin: 10px 0; */
  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;
export const CardCreatorName = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  img {
    width: 30px;
    border-radius: 100%;
    margin-right: 10px;
  }
  p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const CardBtn = styled.div``;

export const DetailsWrapper = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailsStyles = styled.div`
  width: 100%;
  padding: 0 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const LeftSideWrapper = styled.div`
  margin-left: 20px;
  h3 {
    font-family: 'Fugaz One', cursive;
    font-size: 1.6rem;
  }
  h4:nth-of-type(2) {
    max-width: 300px;
    font-weight: 400;
    text-align: justify;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 100px;
  }
  h4:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.text};
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 2em 0 1em 0;
    padding: 0;
  }
`;
export const ImageWrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 75px 0 50px;
  img {
    width: 90%;
  }
`;
export const RightSideWrapper = styled.div`
  margin-right: 20px;

  h4 {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize};
    margin-bottom: 10px;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 2em 0;
    padding: 0;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
    font-size: ${({ theme }) => theme.fontSizeSmall};
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  h4 {
    margin: 0 20px;
    font-size: 1.3em;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const DetailsBtn = styled.button`
  margin-top: 20px;
  border-radius: 3px;
  width: 100%;
  padding: 10px 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize};
  color: #fff;
  cursor: pointer;
  border: solid 1px #00b7be;
`;
export const CreatorWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  cursor: pointer;
  img {
    border-radius: 100%;
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
`;
export const CreatorName = styled.div``;

export const OwnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  img {
    border-radius: 100%;
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
`;
export const OwnerName = styled.div``;

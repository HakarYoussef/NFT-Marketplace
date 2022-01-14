import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { BiFilter } from 'react-icons/bi';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

import ReactSelect from 'react-select';

export const StyledReactSelect = styled(ReactSelect)`
  .Select__control {
    background: ${(props) => props.theme.input};
    border: transparent;
    color: ${(props) => props.theme.text};
    margin-left: 20px;
    padding: 0 20px;
    :hover {
      box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
    }
  }

  .Select__indicator-separator {
    display: none;
  }
  .Select__dropdown-indicator {
    color: inherit;
    :hover {
      color: inherit;
    }
  }
  .Select__control--menu-is-open {
    .Select__dropdown-indicator {
      transition: all 0.3s ease;
      content: 's';
      transform: rotate(180deg);
    }
  }

  .Select__single-value {
    content: 'something';
    color: ${(props) => props.theme.text};
  }
  .Select__menu {
    border-radius: 3px;
    background: ${(props) => props.theme.input};
    width: 100%;
    padding: 10px;
    color: ${(props) => props.theme.text};
    margin-left: 20px;
  }
  .Select__menu-list {
    padding: 0;
  }
  .Select__option {
    border-radius: 3px;
    color: ${(props) => props.theme.text};
    margin: 10px 0;
  }

  .Select__option--is-focused {
    background: ${(props) => props.theme.body};
  }
  .Select__option--is-selected {
    background: ${(props) => props.theme.primary};
  }
`;

export const ExplorerStyles = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100% !important;
`;

export const ExplorerArtworksStyles = styled.div`
  background-color: ${(props) => props.theme.body};
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
  border: 2px solid ${(props) => props.theme.input};
  font-size: ${(props) => props.theme.fontSize};
  cursor: pointer;
`;

export const LatestIconDown = styled(MdOutlineKeyboardArrowDown)`
  color: ${(props) => props.theme.text};
  opacity: 0.6;
  margin: 0 10px;
  transition: all 0.3s ease-out;
  transform: ${(props) => (props.rotate ? `rotate(180deg)` : '')};
`;

export const FilterBtnStyles = styled.button`
  background-color: ${(props) => props.theme.input};
  height: 40px;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  margin-left: 30px;
  justify-content: center;
  z-index: 10;
  width: 160px;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.input};
  font-size: ${(props) => props.theme.fontSize};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
  }
`;

export const FilterIcon = styled(BiFilter)`
  color: ${(props) => props.theme.text};
  opacity: 0.6;
  stroke-width: 0.8px;
  margin: 0 10px;
`;

export const ExSearchStyles = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 40%;
  /* z-index: 12; */
  position: absolute;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0px 8px 20px ${(props) => props.theme.bShadow};
  margin: 40px;

  input {
    margin-left: 10px;
    width: 100%;
    outline: none;
    color: ${(props) => props.theme.text};
    border: none;
    background-color: ${(props) => props.theme.body};
    &::placeholder {
      color: ${(props) => props.theme.text};
      opacity: 0.6;
    }
  }
`;
export const ExSearchIcon = styled(BsSearch)`
  color: ${(props) => props.theme.text};
  opacity: 0.6;
  stroke-width: 0.8px;
`;

export const LatestDropDownStyles = styled.div`
  background-color: ${(props) => props.theme.input};
  z-index: 11;
  border: 2px solid ${(props) => props.theme.input};
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
    color: ${(props) => props.theme.text};
  }
`;

export const FilterListStyle = styled.div`
  display: flex;
  width: 96vw;
  background: ${(props) => props.theme.input};
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 40px -185px;
  flex-wrap: wrap;
  padding: 10px;
  position: absolute;

  p {
    color: ${(props) => props.theme.text};
    margin: 10px 30px;
  }
  h5 {
    color: ${(props) => props.theme.primary};
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
  background-color: ${(props) => props.theme.input};
  height: 40px;
  color: ${(props) => props.theme.text};
  display: flex;
  width: auto;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  border-radius: 100px;
  margin: 0 10px;
  border: 2px solid ${(props) => props.theme.border};
  font-size: ${(props) => props.theme.fontSize};
  cursor: pointer;
`;

export const SingleCardStyles = styled.div`
  background-color: ${(props) => props.theme.input};
  border: solid 2px ${(props) => props.theme.input};
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
    box-shadow: 0 8px 20px ${(props) => props.theme.bShadow};
  }
  h3 {
    margin-top: 10px;
    color: ${(props) => props.theme.text};
  }
`;
export const MultipleCardStyles = styled.div`
  background-color: ${(props) => props.theme.input};
  border: solid 2px ${(props) => props.theme.input};
  text-align: start;
  padding: 10px 10px;
  height: 620px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 26.8rem));
  transition: all 0.18s ease-in-out;
  box-shadow: ${(props) => props.theme.bShadow} 0px 5px,
    ${(props) => props.theme.bShadow} 0px 10px,
    ${(props) => props.theme.bShadow} 0px 13.5px;
  img {
    width: 100%;
    cursor: pointer;
  }
  &:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: 0 8px 20px ${(props) => props.theme.bShadow};
  }
  h3 {
    margin-top: 10px;
    color: ${(props) => props.theme.text};
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
    color: ${(props) => props.theme.text};
  }
`;
export const CardEdition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    margin: 10px 0;
    color: ${(props) => props.theme.text};
  }
`;
export const CardCreator = styled.div`
  /* margin: 10px 0; */
  p {
    color: ${(props) => props.theme.text};
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
    color: ${(props) => props.theme.primary};
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
    color: ${(props) => props.theme.text};
  }
  h4:nth-of-type(2) {
    max-width: 300px;
    font-weight: 400;
    text-align: justify;
    color: ${(props) => props.theme.text};
    margin-bottom: 100px;
  }
  h4:nth-of-type(1) {
    color: ${(props) => props.theme.text};
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

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1.5em 0;
    padding: 0;
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
    color: ${(props) => props.theme.text};
  }
`;

export const DetailsBtn = styled.button`
  margin-top: 20px;
  border-radius: 3px;
  width: 100%;
  padding: 10px 40px;
  background-color: ${(props) => props.theme.primary};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.input};
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
export const CreatorName = styled.div`
  h4 {
    color: #00b7be;
  }
  p {
    margin-top: 5px;
    color: ${(props) => props.theme.text};
    opacity: 0.7;
    font-size: ${(props) => props.theme.fontSizeSmall};
  }
`;

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
export const OwnerName = styled.div`
  h4 {
    color: #00b7be;
  }
  p {
    margin-top: 5px;
    color: ${(props) => props.theme.text};
    opacity: 0.7;
    font-size: ${(props) => props.theme.fontSizeSmall};
  }
`;

export const CollectionStyles = styled.div`
  h4 {
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontSize};
    margin-bottom: 10px;
  }
  p {
    color: ${(props) => props.theme.text};
    opacity: 0.7;
    font-size: ${(props) => props.theme.fontSizeSmall};
  }
`;

export const ViewsStyles = styled.div`
  h4 {
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontSize};
    margin-top: 10px;
    
  }
  }
  p {
    margin-top: 5px;
    color: ${(props) => props.theme.text};
    opacity: 0.7;
    font-size: ${(props) => props.theme.fontSizeSmall};
  }
`;

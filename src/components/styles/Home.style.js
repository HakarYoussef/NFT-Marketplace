import styled from 'styled-components';

export const RecentArtWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 35px;
  margin-left: 45px;
  column-gap: 35px;
  justify-content: flex-start;
  max-width: 100%;
`;

export const TitleWrapper = styled.div`
  color: ${(props) => props.theme.text};
  text-align: center;
  margin: 10px 0 25px 0;
`;

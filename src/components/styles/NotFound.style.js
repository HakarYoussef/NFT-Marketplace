import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 300px;
  }
  h3 {
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    margin-top: 20px;
    color: #00b7be;
  }
`;

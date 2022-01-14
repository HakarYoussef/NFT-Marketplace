import styled, { keyframes } from 'styled-components';

export const SkeletonWrapper = styled.div`
  background-color: ${(props) => props.theme.header};
  padding: 10px 10px;
  height: 620px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 26.8rem));
  box-shadow: 0 8px 20px rgba(0, 0, 0, 10%);
  position: relative;
  overflow: hidden;
`;

export const ImgSkeleton = styled.div`
  background-color: ${(props) => props.theme.skeleton};
  width: 100%;
  height: 400px;
`;

export const TitleSkeleton = styled.div`
  margin-top: 10px;
  width: 30%;
  height: 20px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.skeleton};
`;

export const FirstBlockSkeleton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardPriceSkeleton = styled.div``;

export const PriceTitleSkeleton = styled.div`
  width: 60px;
  height: 12px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.skeleton};
`;

export const PriceSkeleton = styled.div`
  margin: 15px 0;
  width: 75px;
  height: 15px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.skeleton};
`;

export const CardEditionSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const EditionTitleSkeleton = styled.div`
  width: 75px;
  height: 12px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.skeleton};
`;

export const EditionSkeleton = styled.div`
  margin: 15px 0;
  width: 90px;
  height: 15px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.skeleton};
`;

export const SecondBlockSkeleton = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardCreatorSkeleton = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const CardCreatorNameSkeleton = styled.div`
  width: 90px;
  height: 20px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.skeleton};
`;

export const CardCreatorImageSkeleton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;

  background-color: ${(props) => props.theme.skeleton};
`;

export const BidButton = styled.div`
  margin: 10px 0;
  width: 120px;
  height: 40px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.skeleton};
`;

/* animation effects */

export const slideInTop = keyframes`
  0% {
    
    transform: translateX(-150%);
  }
  50% {
    
    transform: translateX(-60%);
  }
  100% {
    
    transform: translateX(150%);
  }
 
`;

export const ShimmerWrapperStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${slideInTop} 2s ease-in-out infinite;
`;

export const ShimmerStyle = styled.div`
  width: 25%;
  height: 100%;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.skeletonGredient}
  );
  transform: skewX(0deg);
`;

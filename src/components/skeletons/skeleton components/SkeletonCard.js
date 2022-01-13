import React from 'react';
import {
  BidButton,
  CardCreatorImageSkeleton,
  CardCreatorNameSkeleton,
  CardCreatorSkeleton,
  CardEditionSkeleton,
  CardPriceSkeleton,
  EditionSkeleton,
  EditionTitleSkeleton,
  FirstBlockSkeleton,
  ImgSkeleton,
  PriceSkeleton,
  PriceTitleSkeleton,
  SecondBlockSkeleton,
  SkeletonWrapper,
  TitleSkeleton,
} from '../skeleton styles/skeletonCard.style';
import Shimmer from './Shimmer';

const SkeletonCard = () => {
  return (
    <>
      <SkeletonWrapper>
        <ImgSkeleton />
        <TitleSkeleton />
        <FirstBlockSkeleton>
          <CardPriceSkeleton>
            <PriceTitleSkeleton />
            <PriceSkeleton />
          </CardPriceSkeleton>
          <CardEditionSkeleton>
            <EditionTitleSkeleton />
            <EditionSkeleton />
          </CardEditionSkeleton>
        </FirstBlockSkeleton>
        <SecondBlockSkeleton>
          <CardCreatorSkeleton>
            <CardCreatorImageSkeleton />
            <CardCreatorNameSkeleton />
          </CardCreatorSkeleton>
          <BidButton />
        </SecondBlockSkeleton>
        <Shimmer />
      </SkeletonWrapper>
    </>
  );
};

export default SkeletonCard;

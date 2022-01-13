import React from 'react';

function IndividualMarketPage({ img, title, avatar }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img src={avatar} alt="" />
    </div>
  );
}

export default IndividualMarketPage;

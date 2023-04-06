import React from 'react';

function Podcast() {
  return (
    <>
      <h1 className="text-center mt-5 mb-4">BaconSale Podcast</h1>
      <p className="text-center">
        Welcome to the BaconSale podcast, where we discuss all things pop
        culture and entertainment.
      </p>
      <p className="text-center">
        Check us out on{' '}
        <a href="https://baconsale.com/" className="link-primary">
          baconsale.com
        </a>{' '}
        for new episodes every week!
      </p>
    </>
  );
}

export default Podcast;

import React, { useState } from 'react';
import SingleEditionCard from './SingleEditionCard';
import MultipleCard from './MultipleEditionCard';
import { Link, Outlet } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './styles/Pagination.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Market = ({ artworks, isLoading }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const artworksPerPage = 6;
  const pagesVisited = pageNumber * artworksPerPage;

  const displayArtworks = artworks
    .slice(pagesVisited, pagesVisited + artworksPerPage)
    .map((art) => {
      return (
        <>
          {art.creations.map((item) => {
            return (
              <Link
                to={`/${item.id}`}
                style={{
                  cursor: 'default',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <SingleEditionCard
                  key={item.id}
                  creatorId={art.creatorId}
                  title={item.title}
                  priceTez={item.priceTez}
                  priceUsd={item.priceUsd}
                  avatar={art.avatar}
                  img={item.img}
                  edition={item.edition}
                  editions={item.editions}
                />
              </Link>
            );
          })}
        </>
      );
    });

  const pageCount = Math.ceil(artworks.length / artworksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          {displayArtworks}
          <ReactPaginate
            previousLabel={<FaAngleLeft />}
            nextLabel={<FaAngleRight />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBtns'}
            previousLinkClassName={'previousBtn'}
            nextClassName={'nextBtn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </React.Fragment>
      )}
    </>
  );
};

export default Market;

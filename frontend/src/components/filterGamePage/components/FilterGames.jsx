import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

import routes from '../../../routes.js';

const itemsPerPage = 10; // количество элементов на странице

const FilterGenryGames = ({ games }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [games]);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return games.slice(startIndex, endIndex);
  };

  const renderPageItems = () => {
    const newData = getPageData();
    return (
      <div className="row mb-4">
        {newData.map((game) => (
          <div key={game.id} className="game-card video-card col-md-4">
            <div className="card mb-4 grow shadow bg-body-secondary">
              <div className="image-wrapper">
                <img
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: 'attr(width) / attr(height)',
                  }}
                  className="card-img-top"
                  width="356"
                  height="201"
                  src={game.thumbnail}
                  alt=""
                />

              </div>
              <div className="card-body d-flex justify-content-between align-items-center">
                <Link
                  to={routes.gamePage(game.title)}
                  state={game}
                  className="text-decoration-none text-muted stretched-link text-truncate"
                >
                  <h4 className="fs-5 p-2 text-truncate">{game.title}</h4>
                  {}
                </Link>
                <Badge className="py-2 px-2 float-right ms-auto">{t('mainPage.free')}</Badge>
                <div className="d-flex justify-content-between align-items-center" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderPaginationItems = () => {
    const totalPages = Math.ceil(games.length / itemsPerPage);

    const paginationItems = Array.from(
      { length: totalPages },
      (_, idx) => idx + 1,
    ).reduce((acc, pageNumber) => {
      acc.push(
        <PageItem
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handlePaginationClick(pageNumber)}
        >
          {pageNumber}
        </PageItem>,
      );
      return acc;
    }, []);

    return paginationItems;
  };

  return (
    <div>
      {renderPageItems()}
      <Pagination className="justify-content-center">{renderPaginationItems()}</Pagination>
    </div>
  );
};

export default FilterGenryGames;

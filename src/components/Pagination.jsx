import React from 'react';
import _ from 'lodash';

const Pagination = props => {
  const {itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1)

    return (
      <div>
        <ul>
        {pages.map(page => (
          <button className={page === currentPage ? "space active" : "space"} key={page} onClick={() => onPageChange(page)}>
            <a>{page}</a>
          </button>
        ))}
        </ul>
      </div>
    );

}

export default Pagination;

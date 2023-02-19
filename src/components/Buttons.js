/** @format */

// /** @format */

// import React from 'react';

// const Buttons = ({ page, resultPerPage, resultLength }) => {
//   const renderBtn = () => {
//     return <div>Hello</div>;
//   };
//   return <div>{renderBtn}</div>;
// };

// export default Buttons;
/** @format */

import React from 'react';

const Buttons = ({ page, numResults, resPerPage, pageGoTo }) => {
  const createButton = (page, type) => {
    if (type === 'prev') {
      return (
        <div>
          <button
            className="btn btn__result btn-primary float-left d-inline"
            data-goto={page - 1}
            onClick={changePage}
          >
            <span>Page {page - 1}</span>
          </button>
        </div>
      );
    } else if (type === 'next') {
      return (
        <div>
          <button
            onClick={changePage}
            className="btn btn__result btn-primary float-right d-inline"
            data-goto={page + 1}
          >
            <span>Page {page + 1}</span>
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="btn btn__result btn-primary float-left d-inline"
            data-goto={page - 1}
            onClick={changePage}
          >
            <span>Page {page - 1}</span>
          </button>
          <button
            onClick={changePage}
            className="btn btn__result btn-primary float-right d-inline"
            data-goto={page + 1}
          >
            <span>Page {page + 1}</span>
          </button>
        </div>
      );
    }
  };
  const changePage = (e) => {
    const btn = e.target.closest('.btn__result');
    if (btn) {
      const goTopage = parseInt(btn.dataset.goto, 10);
      pageGoTo(goTopage);
      // searchView.clearSearchList();
      // searchView.renderResults(state.search.results, goTopage);
    }
  };
  const renderList = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;
    // Button to go to next page btn
    if (page === 1 && pages > 1) {
      button = createButton(page, 'next');
      // Button to go to Both buttons
    } else if (page < pages) {
      button = createButton(page, 'both');
      // Button to go to prev page btn
    } else if (page === pages && pages > 1) {
      button = createButton(page, 'prev');
    }
    return button;
  };

  return <div>{renderList(page, numResults, resPerPage)}</div>;
};

export default Buttons;

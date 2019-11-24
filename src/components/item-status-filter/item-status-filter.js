import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({onFilter, filter}) => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className={ filter === 'all' ? 'btn btn-info' : 'btn btn-outline-secondary'}
        onClick={() => onFilter('all')}
      >All</button>
      <button
        type="button"
        className={ filter === 'active' ? 'btn btn-info' : 'btn btn-outline-secondary'}
        onClick={() => onFilter('active')}
      >Active</button>
      <button
        type="button"
        className={ filter === 'done' ? 'btn btn-info' : 'btn btn-outline-secondary'}
        onClick={() => onFilter('done')}
      >Done</button>
    </div>
  );
};

export default ItemStatusFilter;

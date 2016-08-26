import React from 'react';
import SearchContainer from '../search/SearchContainer';

export default function App({ params, children }) {
  return (
    <div>
      <SearchContainer albumSearch={params.albumSearch || ''} />
      {children}
    </div>
  );
}

App.propTypes = {
  params: React.PropTypes.object.isRequired,
  children: React.PropTypes.object,
};

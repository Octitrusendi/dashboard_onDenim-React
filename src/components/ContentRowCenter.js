import React from 'react';
import LastProduct from './LastProduct';
import GenresInDb from './GenresInDb';
import LastUsers from './LastUsers';

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <LastUsers />

      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}

      <GenresInDb />
      <LastProduct />
    </div>
  );
}

export default ContentRowCenter;

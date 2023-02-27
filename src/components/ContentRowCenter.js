import React from 'react';
import LastProduct from './LastProduct';

import LastUsers from './LastUsers';
import Categories from './Categories';
function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <LastUsers />

      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}

      <Categories />
      <LastProduct />
    </div>
  );
}

export default ContentRowCenter;

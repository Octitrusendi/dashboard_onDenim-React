import React from 'react';
import LastProduct from './LastProduct';

import LastUsers from './LastUsers';
import Categories from './Categories';
function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <LastUsers />
      <Categories />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}


      <LastProduct />
    </div>
  );
}

export default ContentRowCenter;

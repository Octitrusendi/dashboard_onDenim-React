import React from 'react';
import LastProduct from './LastProduct';
import LastSales from './LastSales';
import LastUsers from './LastUsers';
import Categories from './Categories';
import MasVendido from './MasVendido';
function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <LastSales />
      <LastUsers />

      <Categories />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}

      <LastProduct />
      <MasVendido />
    </div>
  );
}

export default ContentRowCenter;

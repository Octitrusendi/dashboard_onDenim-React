import React from 'react';
import '../assets/css/style.css';

export default function Category({ children }) {
  return (
    <div className="col-lg-12 mb-4">
      <div className="card bg-sidebar text-white shadow">
        <div className="card-body"> {children}</div>
      </div>
    </div>
  );
}

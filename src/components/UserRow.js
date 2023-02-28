import React from 'react';

function UserRow(props) {
  const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let rol;
  if (props.id_level === 1) {
    rol = <td>Admin</td>;
  } else {
    rol = <td>Usuario</td>;
  }
  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <img
          className="img-profile rounded-circle"
          src={props.avatar}
          alt="Jordan Walke - Creador de React"
          width="60"
        />
      </td>
      <td>{props.fullName}</td>
      <td>{props.email}</td>
      <td>{props.totalCompras}</td>
      <td>${toThousand(props.order)}</td>
      {rol}

    </tr>
  );
}

export default UserRow;

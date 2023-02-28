import React from 'react';
import moment from 'moment/moment';

function ProductRow(props) {
  const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.user.fullName}</td>
      <td>{props.user.email}</td>
      <td>
        {props.orderItems.map((producto, i) => (
          <tr key={`producto ${i}`}>{producto.name}</tr>
        ))}
      </td>
      <td>
        {' '}
        {props.orderItems.map((producto, i) => (
          <tr key={`producto ${i}`}>{producto.quantity}</tr>
        ))}
      </td>
      <td>
        {' '}
        {props.orderItems.map((producto, i) => (
          <tr key={`producto ${i}`}>${toThousand(producto.price)}</tr>
        ))}
      </td>
      <td>${toThousand(Number(props.total))}</td>
      <td>{props.paymentMethod}</td>
      <td>{props.shippingMethod}</td>
      <td>{moment(props.createdAt).format('DD/MM/YYYY, h:mm a')}</td>
        
    </tr>
  );
}

export default ProductRow;

import React from 'react';

function ProductRow(props) {
  const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let finalPrice = props.price - (props.price * props.sale) / 100;
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>${toThousand(props.price)}</td>
      <td>{props.sale}%</td>
      <td>${toThousand(finalPrice)}</td>
      <td>
        <ul>
          {props.talle.map((talle, i) => (
            <li key={`talle ${i}`}>{talle.talles}</li>
          ))}
        </ul>
      </td>
      <td>
        {props.newCollection === 1 ? (
          <i className="fas fa-check"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </td>
      <td>{props.categoria.name}</td>
      <td>
        <a className='btn btn-success'
          target="_blank"
          rel="noopener noreferrer nofollow"
          href={`http://localhost:3001/productos/detalle/${props.id}`}
        >
          <i className="fas fa-eye"></i>
        </a>
      </td>
    </tr>
  );
}

export default ProductRow;

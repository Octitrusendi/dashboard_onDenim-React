import React from 'react';
import moment from 'moment/moment';

function ContactRow(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.email}</td>
      <td>{props.description}</td>
      <td>{moment(props.createdAt).format('DD/MM/YYYY, h:mm a')}</td>

    </tr>
  );
}

export default ContactRow;

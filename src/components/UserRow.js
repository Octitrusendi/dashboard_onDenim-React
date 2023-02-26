import React from 'react';


function UserRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td><img className="img-profile rounded-circle" src={props.avatar} alt="Jordan Walke - Creador de React" width="60"/></td>
                    <td>{props.fullName}</td>
                    <td>{props.email}</td>


                </tr>
            )
    }
    
        

export default UserRow;
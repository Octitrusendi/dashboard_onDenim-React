import React from 'react';
import ChartRow from './ChartRow';
import ColumChart from './columChart';


let tableRowsData = [
  {
    Title: 'Billy Elliot ',
    Length: '123',
    Rating: '5',
    Categories: ['Drama', 'Comedia'],
    Awards: 2,
  },
  {
    Title: 'Alicia en el país de las maravillas',
    Length: '142',
    Rating: '4.8',
    Categories: ['Drama', 'Acción', 'Comedia'],
    Awards: 3,
  },
];

let tableColumsData = [
    {
      Title: 'Título',
      Length: 'Duración',
      Rating: 'Rating',
      Categories: 'Género',
      Awards: 2,
    }
  ];

function Chart(props) {
  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
            
                {tableColumsData.map((colum,i)=>{
                    return <ColumChart {...colum} key={i} />;
                })}
   {/*              <th>Título</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Género</th>
                <th>Premios</th> */}
              
            </thead>

            <tbody>
              {tableRowsData.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;

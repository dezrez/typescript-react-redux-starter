import * as React from 'react';
import * as classNames from 'classnames';

interface ITableProps extends React.Props<any> {
    columns: string[];
    dataSelectors: string[];
    data: any[];
};

export default function Table({
  columns = [],
  dataSelectors = [],
  data = [],
  children = null
}: ITableProps) {
  const tableClasses = classNames('table');

  const rows = [];
  data.map(row => 
    rows.push(
      <TableRow 
        key={Math.random()} 
        data={row} 
        dataSelectors={dataSelectors}/>
    )
  );

  return (
    <table className={ tableClasses }>
        <thead className="thead-default">
            <tr>
                {columns.map(columnName => 
                  <th key={Math.random()}>{columnName}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
  );
}

function TableRow({
  dataSelectors = [] as string[],
  data = {}
}) {
  return (
    <tr>
        <td>{data[dataSelectors[0]]}</td>
        <td>{data[dataSelectors[1]]}</td>
        <td>{data[dataSelectors[2]]}</td>
    </tr>
  );
}

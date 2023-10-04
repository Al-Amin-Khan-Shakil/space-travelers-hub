import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import { fetchMissionsAsync } from '../../redux/missions/missionsSlice';
import './Missions.css';

function Missions() {
  const dispatch = useDispatch();
  const missionData = useSelector((state) => state.missions.missionData);

  useEffect(() => {
    if (missionData.length === 0) {
      dispatch(fetchMissionsAsync());
    }
  }, [dispatch, missionData]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Mission ID',
        accessor: 'mission_id',
      },
      {
        Header: 'Mission Name',
        accessor: 'mission_name',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
    ],
    [],
  );

  const {
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: missionData,
  });

  return (
    <div>
      <h1>Missions</h1>
      {missionData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th key={column.id}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.id}>
                  {row.cells.map((cell) => (
                    <td key={`i${row.id}`}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Missions;

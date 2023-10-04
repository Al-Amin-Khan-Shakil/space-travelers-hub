import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsAsync } from '../../redux/missions/missionsSlice';

function Missions() {
  const missions = useSelector((state) => state.missions.missionData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissionsAsync());
    }
  }, []);

  return (
    <div>
      <div className="mission-page">
        <table className="missionTable">
          <thead className="missionThead">
            <th width="10%">
              <h3>Mision</h3>
            </th>

            <th width="65%">
              <h3>Description</h3>
            </th>

            <th width="12.5%">
              <h3>Status</h3>
            </th>
            <th width="12.5%">
              {' '}
            </th>
          </thead>

          <tbody>
            {

            missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className="mission-name"><h3>{mission.mission_name}</h3></td>
                <td><p className="description">{mission.description}</p></td>
                <td>
                  <div>
                    active member
                  </div>
                </td>
                <td className="mission-btn">
                  <button type="button" className="leave-mission">Leave Mission</button>
                </td>
              </tr>
            ))

          }

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Missions;

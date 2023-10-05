import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsAsync, cancelMission, joinMission } from '../../redux/missions/missionsSlice';
import './Missions.css';

function Missions() {
  const missions = useSelector((state) => state.missions.missionData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissionsAsync());
    }
  }, [dispatch, missions.length]);

  return (
    <div>
      <div className="mission-page">
        <table className="missionTable">
          <thead className="missionThead">
            <th width="10%">
              <h3>Missions</h3>
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
                  <div className="status">
                    {mission.reserved ? <p className="active-member"> Active member</p> : <p className="not-member">NOT a member</p>}
                  </div>
                </td>
                <td className="mission-btn">
                  {!mission.reserved
                    ? <button type="button" className="join-mission" onClick={() => dispatch(joinMission(mission.mission_id))}>Join Mission</button>
                    : <button type="button" className="leave-mission" onClick={() => dispatch(cancelMission(mission.mission_id))}>Leave Mission</button>}
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

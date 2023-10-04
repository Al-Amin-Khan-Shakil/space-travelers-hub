import { useSelector } from 'react-redux';
import './MyProfile.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.missions.missionData);
  const myRockets = rockets.filter((rocket) => rocket.reserved !== false);
  const myMissions = missions.filter((mission) => mission.reserved !== false);

  return (
    <div className="list-container">
      <table className="rocket-table">
        <thead className="table-title">
          <th>
            <h2 className="my-rockets">My Rockets</h2>
          </th>
        </thead>
        <tbody className="table-body">
          {myRockets.map((rocket) => (
            <tr className="rocket-list" key={rocket.id}>
              <td>
                {rocket.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="mission-table">
        <thead className="table-title">
          <th>
            <h2 className="my-missions">My missions</h2>
          </th>
        </thead>
        <tbody className="table-body">
          {myMissions.map((mission) => (
            <tr className="mission-list" key={mission.mission_id}>
              <td>
                {mission.mission_name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyProfile;

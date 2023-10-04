import { useSelector } from 'react-redux';
import './MyProfile.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const myRockets = rockets.filter((rocket) => rocket.reserved !== true);

  return (
    <div className="list-container">
      <ul className="my-rocket">
        <h2 className="list-title">My Rockets</h2>
        {myRockets.map((rocket) => (
          <li className="rocket-list" key={rocket.id}>
            {rocket.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyProfile;

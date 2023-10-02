import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRocket } from '../redux/rockets/rocketSlice';

const Spacecraft = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(getRocket());
  }, []);

  return (
    <ul className="rocket-list">
      {
        rockets.map((rocket) => (
          <li className="rocket-item" key={rocket.id}>
            <img src={rocket.flickr_images[0]} alt="" />
            <h2 className="rocket-title">{rocket.name}</h2>
            <p className="rocket-des">{rocket.description}</p>
            <button type="button" className="reserve-btn">Reserve Rocket</button>
          </li>
        ))
      }
    </ul>
  );
};

export default Spacecraft;

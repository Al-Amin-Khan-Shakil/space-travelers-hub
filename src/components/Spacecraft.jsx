import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRocket, reserveRocket, cancelRocket } from '../redux/rockets/rocketSlice';

const Spacecraft = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocket());
    }
  }, [dispatch]);

  return (
    <ul className="rocket-list">
      {
        rockets.map((rocket) => (
          <li className="rocket-item" key={rocket.id}>
            <img src={rocket.flickr_images} alt="" />
            <h2 className="rocket-title">{rocket.name}</h2>
            <p className="rocket-des">
              {!rocket.reserved && <span className="reserved-tag" style={{ color: 'red' }}>Reserved</span>}
              {rocket.description}
            </p>
            {rocket.reserved && (
            <button type="button" className="reserve-rocket" onClick={() => dispatch(reserveRocket(rocket.id))}>
              Reserve Rocket
            </button>
            )}
            {!rocket.reserved && (
            <button type="button" className="cancel-reserve" onClick={() => dispatch(cancelRocket(rocket.id))}>
              Cancel Reservation
            </button>
            )}
          </li>
        ))
      }
    </ul>
  );
};

export default Spacecraft;

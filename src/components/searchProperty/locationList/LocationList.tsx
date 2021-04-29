import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import { usedTypedSelector } from '../../../hooks/useTypedSelector';
// import { fetchLocations } from '../../../store/actionCreators/location';

const LocationList: React.FC = () => {
  // const { locations, loading, error } = usedTypedSelector(
  //   state => state.location
  // );
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchLocations());
  // }, []);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (error) {
  //   return <h1>Error!</h1>;
  // }

  const locations = [
    { name: 'Albury, Guildford', id: 'albury_guildford' },
    { name: 'Albury, Newbury', id: 'albury_newbury' },
    { name: 'Albury, Ware', id: 'albury_ware' },
    { name: 'Shifnal', id: 'shifnal' },
  ];

  return (
    <>
      <div className="searches__title">Recent searches:</div>
      <div className="searches__wrapper">
        {locations.map(loc => (
          <Link
            className="searches__item"
            to={`locations/${loc.id}/properties?page=1`}
            key={loc.id}
          >
            {loc.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default LocationList;

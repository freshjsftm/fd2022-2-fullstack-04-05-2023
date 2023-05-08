import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../../store/usersSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { idUser } = useParams();
  useEffect(() => {
    dispatch(getOneUser(Number(idUser)));
  }, [dispatch, idUser]);
  const { currentUser, error, isFetching } = useSelector(
    (state) => state.users
  );
  return (
    <>
      {error && <p>{error}</p>}
      {isFetching && <p>Loading...</p>}
      {currentUser && (
        <div>
          Profile:
          <h2>{currentUser.email}</h2>
          <h3>{currentUser.firstName}</h3>
        </div>
      )}
    </>
  );
};

export default UserProfile;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../store/usersSlice';

const UsersList = (props) => {
  const { isFetching, error, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers({ limit: 5, offset: 0 }));
  }, [dispatch]);
  return (
    <>
      {isFetching && <h2>Loading...</h2>}
      {error && <h2>Error!</h2>}
      {!isFetching && !error && (
        <section>
          <h2>users list</h2>
          <ol>
            {users.map((user) => (
              <li key={user.id}>
                {user.email} 
                <Link to={`/users/${user.id}`}>show profile</Link>
              </li>
            ))}
          </ol>
        </section>
      )}
    </>
  );
};

export default UsersList;

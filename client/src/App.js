import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
const HomePage = lazy(() => import('./pages/HomePage'));
const UsersPage = lazy(() => import('./pages/UsersPage'));
const LogUpPage = lazy(() => import('./pages/LogUpPage'));
const GroupsPage = lazy(() => import('./pages/GroupsPage'));
const UserProfile = lazy(() => import('./components/UserProfile'));

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ol>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/group-create">group create</NavLink>
          </li>
          <li>
            <NavLink to="/registration">registration</NavLink>
          </li>
        </ol>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/group-create" element={<GroupsPage />} />
          <Route path="/registration" element={<LogUpPage />} />
          <Route path="/users/:idUser" element={<UserProfile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

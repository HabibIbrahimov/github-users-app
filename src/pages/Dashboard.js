import React from 'react';
import { Info, Repos, User, Search } from '../components';
const Dashboard = () => {
  return (
    <main>
      <Info />
      <Search />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;

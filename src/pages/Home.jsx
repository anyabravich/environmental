import React from 'react';
import Articles from 'src/components/Articles';
import Header from 'src/components/Header';
import Missions from 'src/components/Missions';

const Home = () => {
  return (
    <>
      <Header />
      <Articles />
      <Missions />
    </>
  );
};

export default Home;

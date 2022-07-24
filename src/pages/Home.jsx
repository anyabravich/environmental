import React from 'react';
import Articles from 'src/components/Articles';
import Header from 'src/components/Header';
import Latests from 'src/components/Latests';
import Missions from 'src/components/Missions';

const Home = () => {
  return (
    <>
      <Header />
      <Articles />
      <Missions />
      <Latests />
    </>
  );
};

export default Home;

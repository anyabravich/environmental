import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from './Container';
import { H2Wrap } from './H2';
import Mission from './Mission';

const Missions = () => {
  const [missionItems, setMissionItems] = useState([]);

  useEffect(() => {
    fetch('db/db.json')
      .then((response) => response.json())
      .then((json) => setMissionItems(json['missionItems']));
  }, []);

  return (
    <MissionsWrap>
      <Container>
        <MissionsTitle bgLight={true}>Our Mission to Save the Planet</MissionsTitle>
        <MissionsItems>
          {missionItems.map(({ img, title, description }, index) => (
            <Mission img={img} title={title} description={description} key={index} />
          ))}
        </MissionsItems>
      </Container>
    </MissionsWrap>
  );
};

const MissionsWrap = styled.section``;

const MissionsTitle = styled(H2Wrap)`
  max-width: ${rem(608)};
  width: 100%;
  margin-bottom: ${rem(40)};
`;

const MissionsItems = styled.div`
  display: grid;
  gap: ${rem(16)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(400)}, auto));
`;

export default Missions;

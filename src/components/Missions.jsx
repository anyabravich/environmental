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
          {missionItems.map((props, index) => (
            <Mission {...props} key={index} />
          ))}
        </MissionsItems>
      </Container>
    </MissionsWrap>
  );
};

const MissionsWrap = styled.section`
  padding: ${rem(160)} 0 ${rem(320)};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: ${rem(160 / 2)} 0 ${rem(320 / 2)};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${rem(160 / 4)} 0 ${rem(320 / 4)};
  }
`;

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

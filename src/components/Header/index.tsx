import React from 'react';

import {
  Container,
  MainLight,
  MainLightInner,
  LightContainer,
  Light,
  Bright,
  LightProps,
} from './styles';

const lights: LightProps[] = [
  {
    color: 'red',
  },
  {
    color: 'yellow',
  },
  {
    color: 'green',
  },
];

const Header: React.FC = () => {
  return (
    <Container>
      <MainLight>
        <MainLightInner />
      </MainLight>
      <LightContainer>
        {lights.map(light => (
          <Light key={light.color} color={light.color}>
            <Bright />
          </Light>
        ))}
      </LightContainer>
    </Container>
  );
};

export default Header;

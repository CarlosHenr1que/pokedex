import styled from 'styled-components/native';

export interface LightProps {
  color: 'red' | 'yellow' | 'green';
}

export const Container = styled.View`
  width: ${props => props.theme.metrics.screenWidth}px;
  height: 170px;
  background-color: ${props => props.theme.colors.primary};
  padding: 42px;
  elevation: 5;
  flex-direction: row;
`;

export const MainLight = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 5px;
  border-color: #fff;

  align-items: center;
  justify-content: center;
  background-color: 'rgb(75, 154, 244)';
  elevation: 5;
`;

export const MainLightInner = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: 'rgb(20, 90, 170)';
`;

export const LightContainer = styled.View`
  flex-direction: row;
  margin-left: 10px;
`;

export const Light = styled.View<LightProps>`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border-width: 1px;
  border-color: #000;
  background-color: ${props => props.color};
  margin-right: 10px;
`;

export const Bright = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 50px;
  background-color: #fff;
  position: absolute;
  left: 4px;
  top: 2px;
`;

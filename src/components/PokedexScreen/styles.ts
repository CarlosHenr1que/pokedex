import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${props =>
    props.theme.metrics.screenWidth - props.theme.metrics.basePadding * 2}px;
  height: 380px;
  border-radius: ${props => props.theme.metrics.baseRadius}px;
  background-color: ${props => props.theme.colors.tertiary};
  border-width: 1px;
  border-color: #000;
  align-items: center;
  elevation: 5;
  margin-top: 30px;
  align-self: center;
`;

export const Content = styled.View`
  width: ${props =>
    props.theme.metrics.screenWidth - props.theme.metrics.basePadding * 4}px;
  height: 315px;
  border-radius: ${props => props.theme.metrics.baseRadius}px;
  background-color: ${props => props.theme.colors.secundary};
  margin-top: ${props => props.theme.metrics.baseMargin}px;
  padding: ${props => props.theme.metrics.basePadding}px;
  flex-direction: column;
  flex-grow: 0;
`;

export const Name = styled.Text`
  font-size: 22px;
  color: #fff;
  font-family: 'Nunito-Bold';
  margin-left: 10px;
  max-width: 120px;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  position: absolute;
  right: -6px;
  top: -40px;
`;

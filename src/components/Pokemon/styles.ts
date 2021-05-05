import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${props =>
    props.theme.metrics.screenWidth - props.theme.metrics.basePadding * 2}px;
  height: 112px;
  border-radius: ${props => props.theme.metrics.baseRadius}px;
  background-color: ${props => props.theme.colors.primary};
  border-width: 1px;
  border-color: #000;
  align-items: center;
  elevation: 5;
  margin-bottom: 40px;
`;

export const Content = styled.View`
  width: ${props =>
    props.theme.metrics.screenWidth - props.theme.metrics.basePadding * 4}px;
  height: 112px;
  border-radius: ${props => props.theme.metrics.baseRadius}px;
  background-color: ${props => props.theme.colors.secundary};
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 22px;
  color: #fff;
  font-family: 'Nunito-Bold';
  margin-left: 10px;
  max-width: 120px;
`;

export const Image = styled.Image`
  width: 143px;
  height: 143px;
`;

import React from 'react';
import {Container, Description, Content, Image} from './styles';
import pokeball from '../../assets/pokeball.png';

interface NotFoundProps {
  error: string;
  onPress: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({error, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Content>
        <Image source={pokeball} />
        <Description>{error}</Description>
      </Content>
    </Container>
  );
};

export default NotFound;

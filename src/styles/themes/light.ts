import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  title: 'default',

  colors: {
    primary: '#FFFFFF',
    secundary: '#000000',
    tertiary: '#C0C0C0',

    primaryText: '#FFFFFF',
  },

  metrics: {
    baseMargin: 20,
    basePadding: 16,
    baseRadius: 7,

    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
  },
};

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  title: 'default',

  colors: {
    primary: '#C10629',
    secundary: '#000000',
    tertiary: '#FFFFFF',

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

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import Toast from 'react-native-toast-message';
import Routes from './routes';

import themes from './styles/themes';

const App: React.FC = () => {
  const deviceTheme = useColorScheme();

  const configureTheme = () => {
    if (deviceTheme !== null && deviceTheme !== undefined) {
      return themes[deviceTheme];
    }

    return themes.light;
  };

  const theme = configureTheme();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" animated />
      <Routes />
      <Toast ref={ref => Toast.setRef(ref)} />
    </ThemeProvider>
  );
};

export default App;

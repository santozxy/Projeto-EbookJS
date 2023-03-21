import * as React from 'react';
import { StatusBar } from 'react-native';
import Routes from './Routes';
import { NavigationContainer } from '@react-navigation/native';
import { primary, secundary, terciary } from './colors';
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={primary}
        translucent={false}
        networkActivityIndicatorVisible={true}
        animated={true}
        showHideTransition={'slide'}
      />
      <Routes />
    </NavigationContainer>
  );
}

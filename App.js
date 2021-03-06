import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import firebase from 'firebase';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';

// import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
// import { LocationContextProvider } from './src/services/location/location.context';
// import { FavoritesContextProvider } from './src/services/favorites/favorites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: 'AIzaSyDLc8gSKdHWDBTanyNV_1A5r7GnfK8UIbQ',
  authDomain: 'mealstogo-b2612.firebaseapp.com',
  projectId: 'mealstogo-b2612',
  storageBucket: 'mealstogo-b2612.appspot.com',
  messagingSenderId: '158582890553',
  appId: '1:420256881549:web:e801a3c130466a055c3bc4',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

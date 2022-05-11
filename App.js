/* eslint-disable prettier/prettier */
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import firebase from 'firebase';

import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';

const firebaseConfig = {
  apiKey: 'AIzaSyDLc8gSKdHWDBTanyNV_1A5r7GnfK8UIbQ',
  authDomain: 'foodinaflash-a9ca9.firebaseapp.com',
  projectId: 'foodinaflash-a9ca9',
  storageBucket: 'foodinaflash-a9ca9.appspot.com',
  messagingSenderId: '420256881549',
  appId: '1:420256881549:web:e801a3c130466a055c3bc4',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword('matt@matthew-woodard.com', '123456')
        .then((user) => {
          console.log(user);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

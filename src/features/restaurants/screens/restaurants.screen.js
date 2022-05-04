import React from 'react';
import styled from 'styled-components/native';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import SearchBar from '../components/SearchBar.js';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component.js';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
  padding: 16px;
  background-color: #000;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: #0e026a;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <SearchBar />
    </SearchContainer>

    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {},
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});

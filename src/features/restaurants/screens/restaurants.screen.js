import React from 'react';
import styled from 'styled-components/native';
import { FlatList, View } from 'react-native';
import Searchbar from '../components/SearchBar.js';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component.js';
import { Spacer } from '../../../components/spacer/spacer.component.js';

import { SafeArea } from '../../../components/utility/safe-area.component';

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]}
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   search: {},
//   list: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: 'blue',
//   },
// });

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

// styled-components=================================================
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: ${(props) => props.theme.space[3]};
`;
//============================================================================================================

// ============================== card layout and information =====================================================
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Sunnydale Diner',
    icon,
    photos = [
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1649905756/website%20pics%20family/181-1813876_game-of-thrones-season-7-dragon-wallpaper-hd_hxoym1.jpg',
    ],
    address = '1630 Revello Dr.',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

// const styles = StyleSheet.create({
//
// });

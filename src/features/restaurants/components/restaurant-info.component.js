import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export const RestaurantInfo = ({ restaurant = {} }) => {
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: 'white' },
  cover: { padding: 20, backgroundColor: 'white' },
  title: { padding: 16 },
});

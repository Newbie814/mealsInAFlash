import React from 'react';

import { Card } from 'react-native-paper';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

// imports from components
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

// svg assets
import star from '../../../../assets/star';
import open from '../../../../assets/open';

// styled-components=================================================
// moved to own folder:
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from './restaurant-info-card.styles';

//============================================================================================================

// ============================== card layout and information =====================================================
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Sunnydale Diner',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://res.cloudinary.com/dylvkdabj/image/upload/v1649905756/website%20pics%20family/181-1813876_game-of-thrones-season-7-dragon-wallpaper-hd_hxoym1.jpg',
    ],
    address = '1630 Revello Dr.',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

// const styles = StyleSheet.create({
//
// });

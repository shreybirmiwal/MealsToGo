import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import {Text} from "../../../components/typography/text.component.js"

import{RestaurantCard, RestaurantCardCover, Address, Info, Rating, Section, SectionEnd} from "./restaurant-info-card.styles"

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray=Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
     <Info>
      <Text variant="label">{name}</Text>

      <Section>
        <Rating>
            {ratingArray.map(()=> (
              <SvgXml xml={star} width={20} height={20}/>
            ))}
          </Rating>

          <SectionEnd>
            {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
          </SectionEnd>

      </Section>

      <Address>{address}</Address>
     </Info>
    </RestaurantCard>
  );
};
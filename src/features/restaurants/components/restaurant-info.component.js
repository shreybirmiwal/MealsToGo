import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

export const RestaurantInfo =({restaurant={}})=>{

    const {
        name = 'somerestaurant',
        icon,
        photos =[
            "https://th.bing.com/th/id/OIP.-kVj3nzHiPy6HoO7xCanLAHaE8?pid=ImgDet&rs=1"
        ],
        address = "111 poop way",
        isOpenNow=true,
        rating= 5,
        isClosedTemporarily
    } = restaurant;

    return(
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{uri:photos[0]}}/>
            <Text> {name}</Text>
        </Card>
    );

};
const styles = StyleSheet.create({

    card:{backgroundColor:'white'},
    cover:{padding:20, backgroundColor:"white"},

});
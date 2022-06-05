import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {StatusBar, StyleSheet, Text, View,SafeAreaView, Platform  } from 'react-native';
import {Searchbar} from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.component';

export const RestaurantsScreen =()=>{
    return(
        <SafeAreaView  style={styles.container}>

            <View style={styles.searchBox}>
                <Searchbar/>
            </View>

            <View style={styles.list}>
                <RestaurantInfo/>
            </View>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    searchBox:{
      padding: 16,
    },
    list:{
      padding: 16,
      flex:1,
      backgroundColor:'blue',
    }
  });
  



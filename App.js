import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {StatusBar, StyleSheet, Text, View,SafeAreaView, Platform  } from 'react-native';
import {Searchbar} from 'react-native-paper';

const isAndroid=Platform.OS==='android';
export default function App() {
  return (
    <>
      <SafeAreaView  style={styles.container}>

        <View style={styles.searchBox}>
          <Searchbar/>
        </View>

        <View style={styles.blueBox}>
          <Text>blue</Text>
        </View>

      </SafeAreaView >

      <ExpoStatusBar style="auto"/>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBox:{
    padding: 16,
    backgroundColor:'green',
  },
  blueBox:{
    padding: 16,
    flex:1,
    backgroundColor:'blue',
  }
});

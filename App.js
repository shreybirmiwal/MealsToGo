import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import {theme} from './src/infrastructure/theme/index.js'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text} from "react-native"
import { SafeArea } from './src/components/utilities/safe-area.component';
import {Ionicons} from '@expo/vector-icons'

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';


function Settings() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}
function Map() {
  return (
    <SafeArea>
      <Text>Map!</Text>
    </SafeArea>  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded){
    return null;
  }

  return (
    
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>

            <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({color, size }) => {
                let iconName;

                if (route.name === 'Restaurants') {
                  iconName = "md-restaurant";
                } else if (route.name === 'Settings') {
                  iconName = "md-settings";
                } else if(route.name == 'Map'){
                  iconName = "md-map";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: 'gray',
            })}
          >            
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />

          </Tab.Navigator>

        </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style="auto"/>
    </>
  );
}


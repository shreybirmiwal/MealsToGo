import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import {theme} from './src/infastructure/theme/index'

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen/>
      </ThemeProvider>

      <ExpoStatusBar style="auto"/>
    </>
  );
}


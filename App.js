import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import { ThemeProvider } from "styled-components/native";
import { initializeApp } from 'firebase/app';

import * as firebase from 'firebase';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContext, AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyCZiG3cjxDjZKEHD_HCRyne0iNYl_XUKH4",
  authDomain: "mealstogo-4edba.firebaseapp.com",
  projectId: "mealstogo-4edba",
  storageBucket: "mealstogo-4edba.appspot.com",
  messagingSenderId: "254931084611",
  appId: "1:254931084611:web:59e142ac8717699f987bf6"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      firebase.auth().signInWithEmailAndPassword("shreybirmiwal@gmail.com", "test123").then((user)=>{
        setIsAuthenticated(true);
      }).catch((e)=>{
        console.log(e);
      })
    },2000)
  },[])

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if(!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
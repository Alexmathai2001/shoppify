import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    // 'Inter-Black': require('./assets/fonts/Poppins-Black.ttf'), // Make sure to replace with your actual font file
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  );
}

export default RootLayout;

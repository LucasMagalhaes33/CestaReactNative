import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/cesta/index';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada){
    return <AppLoading></AppLoading>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

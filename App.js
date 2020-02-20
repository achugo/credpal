import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { AppLoading } from 'expo'
import * as Font from 'expo-font';
import ProfileNavigator from './navigation/AppNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    'sf-normal': require('./assets/fonts/SFUIText-Regular.ttf'),
    'sf-bold': require('./assets/fonts/SFUIText-Bold.ttf')
  })
}

const { width, height } = Dimensions.get('window');

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }

  return (
    <ProfileNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: "7.76%"
  },
  appText: {
    fontFamily: 'sf-bold',
    fontSize: 22
  }
});

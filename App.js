import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react'
import HomeScreen from './src/screens/HomeScreen';
import CoinScreen from './src/screens/CoinScreen';
import AssetItem  from './src/components/AssetItem'

export default function App() {
  return (
    <View style={styles.container}>
     
      <CoinScreen />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    
  },
});

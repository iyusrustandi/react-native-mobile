import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DataCarousel from './components/DataList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DataCarousel />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

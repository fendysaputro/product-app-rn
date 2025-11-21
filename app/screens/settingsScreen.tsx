import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomProfileCard from '../util/customProfileCard';

export default function settingsScreen() {
  return (
    <View style={styles.container}>
      <CustomProfileCard title="Fendy Saputro" description="Mobile Engieer" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center'
  },
});
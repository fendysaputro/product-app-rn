import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomProfileCard from '../util/customProfileCard';
import RowView from '../util/rowView';

export default function settingsScreen() {
  const Separator = () => <View style={styles.separator} />;


  return (
    <View style={styles.container}>
      <CustomProfileCard title="Fendy Saputro" description="Mobile Engieer" />
      <Text style={styles.text}>Other Setting</Text>
      <RowView iconItem='person-outline' name="Profile details" iconArrow="arrow-forward"></RowView>
      <RowView iconItem='logo-ionic' name='Password' iconArrow='arrow-forward'></RowView>
      <RowView iconItem='notifications' name='Notification' iconArrow='arrow-forward'></RowView>
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
    margin: 10,
    textAlign: 'left'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
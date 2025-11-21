import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularImage from '../util/circularImageProfile';

const CustomCard = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <CircularImage imageUri="https://picsum.photos/500/400" />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // For Android shadow
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  cardDescription: {
    fontSize: 14,
    color: '#666'
  },
});

export default CustomCard;
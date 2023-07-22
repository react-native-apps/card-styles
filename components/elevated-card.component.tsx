import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Elevated Cards</Text>
        <ScrollView horizontal={true} style={styles.container}>
          <View
            style={[
              styles.card,
              styles.elevated,
              {backgroundColor: generateColor()},
            ]}>
            <Text>Tap</Text>
          </View>
          <View
            style={[
              styles.card,
              styles.elevated,
              {backgroundColor: generateColor()},
            ]}>
            <Text>Tap</Text>
          </View>
          <View
            style={[
              styles.card,
              styles.elevated,
              {backgroundColor: generateColor()},
            ]}>
            <Text>Tap</Text>
          </View>
          <View
            style={[
              styles.card,
              styles.elevated,
              {backgroundColor: generateColor()},
            ]}>
            <Text>Tap</Text>
          </View>
          <View
            style={[
              styles.card,
              styles.elevated,
              {backgroundColor: generateColor()},
            ]}>
            <Text>Tap</Text>
          </View>
          <View
            style={[
              styles.card,
              styles.elevated,
              {backgroundColor: generateColor()},
            ]}>
            <Text>Tap</Text>
          </View>
          <View
            style={[
              styles.card,
              styles.elevated,
              {backgroundColor: generateColor()},
            ]}>
            <Text>Tap</Text>
          </View>
          <View
            style={[
              styles.card,
              styles.elevated,
              {backgroundColor: generateColor()},
            ]}>
            <Text>Tap</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#FFFFFF',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  elevated: {
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333333',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  container: {
    padding: 8,
  },
});

function generateColor() {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
}

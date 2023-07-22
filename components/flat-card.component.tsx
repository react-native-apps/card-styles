import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Flat Card</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardRed]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.cardGreen]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardBlue]}>
            <Text>Blue</Text>
          </View>
        </View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
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
  cardRed: {
    backgroundColor: '#EF5354',
  },
  cardGreen: {
    backgroundColor: '#50DBB4',
  },
  cardBlue: {
    backgroundColor: '#5DA4FA',
  },
});

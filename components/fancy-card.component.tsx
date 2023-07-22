import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ksVvkMQnvM5xIrtOs_QfrnP5URupKMngAASiUQg3BE-ZCV1cockTaiOIWaCyLLBYk5I&usqp=CAU',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Pikachu</Text>
            <Text style={styles.cardLabel}>A Starter Pokemon</Text>
            <Text style={styles.cardDescription}>
              Main Pokemon of Anime owned by Ash.
            </Text>
            <Text style={styles.cardFooter}>Starter Pokemon</Text>
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
    padding: 8,
    color: '#FFFFFF',
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowColor: '#333',
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 16,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E', 
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {},
});

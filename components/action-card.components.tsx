import {
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteUrl: string) {
    Linking.openURL(websiteUrl);
  }
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Blog Card</Text>
        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              What's new in JavaScript 21 - ES12
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://www.pullrequest.com/blog/javascript-es2021-you-need-to-see-these-es12-features/images/whats-new-in-javascript-es12.jpg',
              }}
              style={styles.blogImage}
            />
          </View>
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.bodyText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam tempora minima iure hic praesentium ipsa atque unde amet
              beatae quo nobis laudantium dolorem doloremque consequatur, magnam
              maiores odio cupiditate reiciendis!
            </Text>
          </View>
          <View style={styles.bodyFooter}>
            <TouchableOpacity
              style={styles.footerBtn}
              onPress={() => {
                openWebsite(
                  'https://www.syncfusion.com/blogs/post/top-6-javascript-es12-features-you-should-use.aspx',
                );
              }}>
              <Text style={styles.footerText}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.footerBtn}
              onPress={() => {
                openWebsite('https://www.linkedin.com/in/param-singh-dev');
              }}>
              <Text style={styles.footerText}>Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  blogImage: {
    height: 200,
  },
  bodyContainer: {},
  bodyText: {
    color: '#FFFFFF',
  },
  bodyFooter: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  footerText: {
    fontSize: 16,
  },
  footerBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});

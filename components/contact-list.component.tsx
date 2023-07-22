import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Parminder Singh',
      status: 'Enjoying my learning journey of React Native',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQHAaNX50rOyeQ/profile-displayphoto-shrink_400_400/0/1667592993898?e=1694044800&v=beta&t=sZWWdsulqiKpMT84aJxuQdDT27WA8nBKVhJ22LkdOaY',
    },
    {
      uid: 2,
      name: 'Parminder Singh',
      status: 'Enjoying my learning journey of React Native',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQHAaNX50rOyeQ/profile-displayphoto-shrink_400_400/0/1667592993898?e=1694044800&v=beta&t=sZWWdsulqiKpMT84aJxuQdDT27WA8nBKVhJ22LkdOaY',
    },
  ];

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Contact List</Text>
        <ScrollView style={styles.container} scrollEnabled={false}>
          {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
              <Image source={{uri: imageUrl}} style={styles.userImage} />
              <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus} numberOfLines={2}>
                  {status}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
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
  container: {},
  userCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8d3daf',
    marginHorizontal: 12,
    borderRadius: 10,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginHorizontal: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
    padding: 2,
    color: '#FFF',
  },
  // userDetails: {

  // }
});

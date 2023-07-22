import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/flat-card.component';
import ElevatedCard from './components/elevated-card.component';
import FancyCard from './components/fancy-card.component';
import ActionCard from './components/action-card.components';
import ContactList from './components/contact-list.component';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

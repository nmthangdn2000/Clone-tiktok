import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import User from './User';
import { Tabs } from 'react-native-collapsible-tab-view';
import ListVideo from './ListVideo';

const data = [
  { key: '1' },
  { key: '2' },
  { key: '3' },
  { key: '4' },
  { key: '5' },
  { key: '6' },
  { key: '7' },
  { key: '8' },
  { key: '9' },
  { key: '10' },
  { key: '11' },
  { key: '6' },
  { key: '7' },
  { key: '8' },
  { key: '9' },
  { key: '10' },
];
const ProfileScreen = ({ setTheme }) => {
  // useEffect(() => {
  //   setTheme('light');
  // });
  return (
    <SafeAreaView style={styles.container}>
      <Tabs.Container renderHeader={User}>
        <Tabs.Tab name="SELECTED_IMG">
          <ListVideo dataList={data} />
        </Tabs.Tab>
        <Tabs.Tab name="HEARTICON_LOCK_IMG">
          <ListVideo dataList={data} />
        </Tabs.Tab>
      </Tabs.Container>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    width: '100%',
    backgroundColor: '#2196f3',
  },
});

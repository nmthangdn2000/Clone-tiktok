import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { COLOR, SPACING } from '../../../configs/styles';
import ItemUser from '../../../components/item/ItemUser';
import ListView from '../../../components/ListView';
import { useIsFocused } from '@react-navigation/native';
import * as userApi from '../../../apis/user.api';
import { useSelector } from 'react-redux';

const User = () => {
  const isFocusTab = useIsFocused();

  const txtSearch = useSelector(state => state.search.txtSearch);

  const [users, setUsers] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const getUser = await userApi.getUser(txtSearch, 20);

      const listUser = getUser.data.data.map(e => {
        const u = {
          avatar: e.avatar,
          name: e.name,
          userName: e.userName,
          follow: '14.9k',
          numVideo: e.totalVideo,
        };
        return u;
      });

      setUsers(listUser);
    } catch (error) {
      console.log(error);
    }
  }, [txtSearch]);

  useEffect(() => {
    if (isFocusTab) {
      fetchData();
    }
  }, [isFocusTab, fetchData]);

  return (
    <View style={styles.container}>
      <ListView
        data={users}
        renderItem={({ item }) => <ItemUser item={item} />}
      />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: SPACING.S4,
    paddingTop: SPACING.S2,
  },
});

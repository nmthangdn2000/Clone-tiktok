import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { COLOR, SPACING } from '../../../configs/styles';
import ListView from '../../../components/ListView';
import { AVATA_IMG } from '../../../configs/source';
import ItemSearchSuggestions from '../../../components/item/ItemSearchSuggestions';
import { useSelector } from 'react-redux';
import * as userApi from '../../../apis/user.api';

const SuggestionsSearch = () => {
  const txtSearch = useSelector(state => state.search.txtSearch);
  const typingTimeoutRef = useRef(null);

  const [data, setData] = useState([]);

  const fetchData = async text => {
    try {
      const search = await userApi.getUser(text);
      const result = search.data.map(e => {
        return {
          text: e.name,
          avatar: e.avatar,
        };
      });
      setData(result || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (txtSearch?.length > 0) {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      typingTimeoutRef.current = setTimeout(() => {
        fetchData(txtSearch);
      }, 500);
    }

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [txtSearch]);

  return (
    <View style={styles.container}>
      <ListView
        data={data}
        renderItem={item => <ItemSearchSuggestions item={item} />}
      />
    </View>
  );
};

export default SuggestionsSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: SPACING.S4,
  },
});

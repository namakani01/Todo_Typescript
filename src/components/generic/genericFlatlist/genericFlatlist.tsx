import {FlatList, View, StyleSheet, ListRenderItemInfo} from 'react-native';
import React from 'react';

type ItemType = {
  id: string; 
  text: string;
};

type GenericFlatListProps = {
  data: ItemType[];
  renderItem: (item: ListRenderItemInfo<ItemType>) => React.ReactElement;
  keyExtractor?: (item: ItemType) => string;
  style?: object;
  contentContainerStyle?: object;
};

const GenericFlatList = ({
  data,
  renderItem,
  keyExtractor = item => item.id,
  style,
  contentContainerStyle,
}: GenericFlatListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={[style]}
      // contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
    />
  );
};

// const styles = StyleSheet.create({
//   flatList: {
//     flex: 1,
//   },
//   contentContainer: {
//     padding: 10,
//   },
// });

export default GenericFlatList;

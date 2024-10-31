import {FlatList, View, StyleSheet, ListRenderItemInfo} from 'react-native';
import React from 'react';

type GenericFlatListProps<T> = {
  data: T[];
  renderItem: (item: ListRenderItemInfo<T>) => React.ReactElement;
  keyExtractor?: (item: T) => string;
  style?: object;
  contentContainerStyle?: object;
};

function GenericFlatList<T>({
  data,
  renderItem,
  keyExtractor = item => (item as any).id,  
  style,
  contentContainerStyle,
}: GenericFlatListProps<T>) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={style}
      contentContainerStyle={contentContainerStyle}
    />
  );
}

export default GenericFlatList;

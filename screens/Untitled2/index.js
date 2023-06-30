import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
const cats = [{
  id: '1',
  name: 'Fluffy',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  name: 'Whiskers',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '3',
  name: 'Mittens',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '4',
  name: 'Shadow',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '5',
  name: 'Luna',
  image: 'https://tinyurl.com/42evm3m3'
}];

const CatListScreen = () => {
  const renderCatItem = ({
    item
  }) => <View style={styles.catItem}>
      <Image source={{
      uri: item.image
    }} style={styles.catImage} />
      <Text style={styles.catName}>{item.name}</Text>
    </View>;

  return <View style={styles.container}>
      <FlatList data={cats} renderItem={renderCatItem} keyExtractor={item => item.id} contentContainerStyle={styles.listContainer} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24
  },
  catItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  catImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16
  },
  catName: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default CatListScreen;
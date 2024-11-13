// App.js
import React, { useState } from 'react';
import { FlatList, Text, View, Image, RefreshControl, StyleSheet } from 'react-native';
import { langs } from './data';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.logo} style={styles.logo} />
      <Text style={styles.langName}>{item.lang}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={langs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  langName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

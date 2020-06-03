import React from 'react';

import { SafeAreaView, useSafeArea } from 'react-native-safe-area-context';

import { StyleSheet, FlatList, View } from 'react-native';

import ShopCard from '../../components/shopCard/shopCard';
import useGetMockData from '../../../hooks/getMockData';

const DiscoverContainer: React.FC <{}> = () => {
  const insets = useSafeArea();
  return (
    <SafeAreaView style={{ 
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      backgroundColor: '#f7fafc'
      }}>
        <View style={styles.container}>
          <FlatList
            data={useGetMockData()}
            renderItem={({item}) => <ShopCard list={item}/>}
            keyExtractor={item => item.name}
          />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    flex: 1
  }
})

export default DiscoverContainer
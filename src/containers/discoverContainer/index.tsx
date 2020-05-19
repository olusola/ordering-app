import React from 'react';

import { SafeAreaView, useSafeArea } from 'react-native-safe-area-context';

import { StyleSheet, Text, View } from 'react-native';

const DiscoverContainer: React.FC <{}> = () => {
  const insets = useSafeArea();
  
  return (
    <SafeAreaView style={{ 
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom
      }}>
        <View style={styles.container}>
          <Text>disjbjjcover</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  }
})

export default DiscoverContainer
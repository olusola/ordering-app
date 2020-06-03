import React from 'react';
import { StyleSheet, View } from 'react-native';

import ShopFrontHeader from "../components/shopFrontHeader/shopFrontHeader";
import ShopFrontBody from '../components/shopFrontBody/shopFrontBody';


const ShopFront = (props:any) => {
  const { list } = props.route.params
  return (
    <View style={styles.container}>
      <ShopFrontHeader/>
      <ShopFrontBody data={list}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default ShopFront
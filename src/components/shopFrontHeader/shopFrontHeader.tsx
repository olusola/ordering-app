import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const image = { uri: "https://media-cdn.tripadvisor.com/media/photo-s/11/33/87/c5/soho-coffee-co-the-bullring.jpg" };

const ShopFrontHeader = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <SafeAreaView>
          <View style={styles.navWrapper}>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-round-back" size={30} color="#2D3748" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
              <Ionicons name="ios-heart-empty" size={25} color="#2D3748" />
            </TouchableOpacity>
          </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
    },
    navWrapper: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20
    },
    navButton: {
      backgroundColor: "#fff",
      width: 40,
      height: 40,
      borderRadius: 40/2,
      alignItems: "center",
      justifyContent: "center"
    },
    image: {
      flex: 1,
      resizeMode: "cover"
    }
  })

export default ShopFrontHeader
import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

type Props = {
  list: {
    id: number;
    meta: {
      shop_name: string;
      logo: string;
      location:string;
    };
  }
}

const ShopCard: React.FC<Props> = ({list}) => {
  const {shop_name, logo, location} = list.meta

  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ShopFront',{list})}>
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
              <Text>{logo}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{shop_name}</Text>
                <View style={styles.locationWrapper}>
                    <Text style={styles.location}>{location}</Text>
                    <Text style={styles.location}>3mins...</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 100,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
	    width: 0,
	    height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
    borderRadius: 10,
    marginBottom: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  logoWrapper: {
      backgroundColor: "#f7fafc",
      width: 70,
      marginRight: 20
  },
  details: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch"
  },
  locationWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10
  },
  location: {
    fontSize: 13,
    fontWeight: "300"
  }
})

export default ShopCard
import React from 'react';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const AddToBasket = () => {
  return (
    <View 
    style={{
      padding:10, 
      backgroundColor: "green", 
      position: "absolute", 
      bottom: 30, 
      alignSelf: "center",
      marginHorizontal: 20,
      borderRadius: 10,
      left: 0,
      right: 0,
      }}>
      <Text style={{fontSize: 24, color: "white", fontWeight: "500", textAlign: "center", textTransform: "capitalize"}}>
        Add To Basket (£0.00)
      </Text>
    </View>
  )

}

const MenuItem = ({ title }:any) => {
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height
  
  const [openModal, setOpenModal] = React.useState(false)

  const _selectMenuItem = () => {
    setOpenModal(true)
  }

  return(
    <View>
      <TouchableOpacity onPress={_selectMenuItem}>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemTitle}>{title}</Text>
          <Text style={styles.menuItemPrice}>2.99</Text>
        </View>
      </TouchableOpacity>
      
      <Modal
        isVisible={openModal}
        onBackdropPress={() => setOpenModal(false)}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        style={{margin: 0, flex: 1}}
      >
        <View style={{flex:1, flexDirection:"column", justifyContent: "space-between"}}>
          <View style={{flex:1}}></View>
          <View style={{
            flex:3, 
            backgroundColor:"white", 
            paddingHorizontal: 20, 
            borderRadius: 30,
            paddingTop: 40
            }}>
            <View>
              <View style={{paddingHorizontal: 20, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#EDF2F7"}}>
                <Text style={{textAlign: "center", fontWeight: "500", fontSize: 20}}>Frappacinno Chocolate</Text>
                <Text style={{textAlign: "center", fontWeight: "300", fontSize: 16}}>containes alot of stuf for you body ahha kidding</Text>
              </View>
              <View style={{position: "absolute", top: -30, right: -5}}>
                <Text onPress={() => setOpenModal(false)} style={{textAlign: "center", fontWeight: "600", fontSize: 22, padding: 5, color: "#2D3748"}}>X</Text>
              </View>
            </View>
            <AddToBasket/>
          </View>
        </View>
      </Modal>
      
    </View>
  )
}

const ShopFrontBody = ({data}:any) => {

  const navigation = useNavigation();
  const {meta:{shop_name, location}, menu_categories, menu} = data

  return (
    <View style={styles.shopBody}>
      <View style={styles.shopMeta}>
        <Text style={styles.shopMetaTitle}>{shop_name}</Text>
        <Text style={styles.shopMetaSubTitle}>{location}</Text>
      </View>
      <View style={styles.menuCat}>
        <FlatList
          data={menu_categories}
          renderItem={
            ({item}) => 
              <View style={styles.catItem}>
                <Text style={styles.catItemText}>{item}</Text>
              </View>
            }
            keyExtractor={(item, index) => item + index}
            horizontal={true}
        />
      </View>
      <View>
        <SectionList
          sections={DATA}
          keyExtractor={(index) => index}
          renderItem={({ item }) => <MenuItem title={item}/>}
          renderSectionHeader={({ section: {title} }) => (
            <Text style={styles.headerr}>{title}</Text>
          )}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    backgroundColor: "green"
  },
  container: {
    flex: 1,
    // backgroundColor: "red"
  },
  header: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  shopBody: {
    flex: 3,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  catItem: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
    // backgroundColor: "silver",
  },
  catItemText: {
    fontWeight: "500",
    fontSize: 16,
    textTransform: "capitalize",
    color: "#2D3748"
  },
  menuItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F7FAFC"
  },
  headerr: {
    fontSize: 16,
    backgroundColor: "#EDF2F7",
    padding: 5,
    fontWeight: "500",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#2D3748"
  },
  menuItemTitle: {
    fontSize: 16,
    color: "#2D3748"
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2D3748"
  },
  menuCat: {
    marginVertical: 10
  },
  shopMeta: {
    marginTop: -20,
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingTop: 15
  },
  shopMetaTitle: {
    fontSize: 22,
    fontWeight: "500",
    textTransform: "capitalize",
    color: "#2D3748"
  },
  shopMetaSubTitle: {
    fontSize: 16,
    fontWeight: "200",
    color: "#2D3748"
  }
})

export default ShopFrontBody
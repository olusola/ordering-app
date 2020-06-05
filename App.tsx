import * as React from 'react';
import { View, Text } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Discover from './src/screens/discover';
import Account from './src/screens/account';
import Rewards from './src/screens/rewards';
import ShopFront from './src/screens/shopFront';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DiscoverStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="DiscoverList" component={RootTabStack}/>
    <Stack.Screen name="ShopFront" component={ShopFront}/>
  </Stack.Navigator>
)

const RootTabStack = () => (
  <Tab.Navigator
          initialRouteName="Discover"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Account') {
                iconName = focused ? 'ios-person' : 'ios-person';
              }
              
              if (route.name === 'Discover') {
                iconName = focused ? 'ios-infinite' : 'ios-infinite';
                size = 40
              }

              if (route.name === 'Offers') {
                iconName = focused ? 'ios-star' : 'ios-star';
              }

              return <Ionicons name={iconName} size={size} color={color} />;

            }
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'black',
          }}
          
        >
          <Tab.Screen name="Account" component={Account} />
          <Tab.Screen name="Discover" component={Discover} />
          <Tab.Screen name="Offers" component={Rewards} />
        </Tab.Navigator>
)

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DiscoverStack/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
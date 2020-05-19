import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Discover from './src/screens/discover';
import Account from './src/screens/account';
import Rewards from './src/screens/rewards';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Account') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }
            
            if (route.name === 'Discover') {
              iconName = focused ? 'ios-infinite' : 'ios-infinite';
            }

            if (route.name === 'Offers') {
              iconName = focused ? 'ios-star' : 'ios-star';
            }

            return <Ionicons name={iconName} size={size} color={color} />;

          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Account" component={Account} />
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Offers" component={Rewards} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
import React, { useState } from 'react';
import { Text } from 'react-native';
import { HomeScreenStack, ProfileScreenStack, RecitationScreenStack } from '../navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../constants/colors';

const Tab = createBottomTabNavigator();

// Come back to study this useState Hook because its very useful for updating values 
// Not a good example because we removed 
export default function TabBar() {
  const [focusedTab, setFocusedTab] = useState(null);

  const handleTabFocus = (tabName) => {
    setFocusedTab(tabName);
  };

  return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
            tabBarLabel: ({ focused }) => {
            if (focused) {
                return <Text>{route.name}</Text>;
            }
            return null;
            },
            tabBarActiveTintColor: COLORS.orange,
            headerShown: false, 
        })}
    >
      <Tab.Screen
        name='Recitation'
        component={RecitationScreenStack}
        listeners={{
          focus: () => handleTabFocus('Recitation'),
        }}
        options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='motion-play-outline' color={color} size={size} />
            )
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeScreenStack}
        listeners={{
          focus: () => handleTabFocus('Home'),
        }}
        options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='home' color={color} size={size} />
            )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreenStack}
        listeners={{
          focus: () => handleTabFocus('Profile'),
        }}
        options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='account' color={color} size={size} />
            )
        }}
      />
    </Tab.Navigator>
  );
}

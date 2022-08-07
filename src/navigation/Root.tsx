import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Favorites, Details, Home} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, useTheme} from 'bad-ui';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.iconPrimary,
        tabBarInactiveTintColor: colors.iconLow,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Icon color={color as any} name="home" size={size} />;
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color, size}) => {
            return <Icon color={color as any} name="cards-heart" size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const NavigationRoot = () => {
  const renderRoutes = React.useMemo(() => {
    return (
      <>
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          options={{
            title: 'Details',
          }}
          name="Details"
          component={Details}
        />
      </>
    );
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderRoutes}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;

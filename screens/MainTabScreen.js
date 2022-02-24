import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useTheme } from 'react-native-paper';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from "./EditProfileScreen"

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => {
    return(
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: "#4E1CF5",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: "#694fad",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: "#d02860",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#009387"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: 'bold'
        },
        headerTitleAlign: "center"
        }}
        >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerLeft: () => (
        <Icon.Button name="ios-menu-outline" size={25}
        backgroundColor="#009387" onPress={() => 
          navigation.openDrawer()}>

          </Icon.Button>
        
        )
      }} 
   
      />
   
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#4E1CF5",
     
    },
    headerTintColor: "#fff",
    
    headerTitleStyle: {
    fontWeight: 'bold'
    },
    headerTitleAlign: "center"
    }}
    >
  <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
    headerLeft: () => (
      <Icon.Button name="ios-menu-outline" size={25}
      backgroundColor="#4E1CF5" onPress={() => 
        navigation.openDrawer()}>

        </Icon.Button>
      
      )
  }}
  
  />

</DetailsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => {
  const{colors} =useTheme();
  return(
  <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
        shadowColor: colors.background,
        elevation: 0
       
      },
      headerTintColor: colors.text,
      
      
      headerTitleAlign: "center"
      }}
      >
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
      title: "",
      headerLeft: () => (
        <Icon.Button 
        name="ios-menu-outline" 
        size={25}
        backgroundColor={colors.background}
        color={colors.text}
        onPress={() => navigation.openDrawer()}
          />

        ),
        headerRight: () => (
          <MaterialCommunityIcons.Button 
          name="account-edit" 
          size={25}
          backgroundColor={colors.background}
          color={colors.text} 
          onPress={() => navigation.navigate("EditProfile")}
        />

        ),
    }}
    
    />
     <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
  </ProfileStack.Navigator>
  )};

export default MainTabScreen;
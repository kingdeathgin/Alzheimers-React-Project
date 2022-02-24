
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DetailsScreen = ({navigation}) => {
    return (
      <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
        <Text> Details Screen</Text>
        <Button 
        title="Go to Details Screen again"
        onPress={() => navigation.push("Details")}>
        </Button>
        <Button 
        title="Go to Details Home"
        onPress={() => navigation.navigate("Home")}>
        </Button>
        <Button 
        title="Go back"
        onPress={() => navigation.goBack()}>
        </Button>
      </View>
    );
  };


export default DetailsScreen;
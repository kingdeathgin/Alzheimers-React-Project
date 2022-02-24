import React from 'react';
import { Button, StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeScreen = ({navigation}) => {

  const {colors} = useTheme();

  const theme = useTheme();
  
    return (
      <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
       
        <Text style={{color: colors.text}}> Home Screen</Text>
        <Button 
        title="Go to Details Screen!"
        onPress={() => navigation.navigate("Details")}>
        </Button>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
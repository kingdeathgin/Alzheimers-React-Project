
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';



const SupportScreen = () => {
    return (
      <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
        <Text> Settings Screen</Text>
        <Button 
        title="Click Here"
        onPress={() => alert("Button Clicked")}>
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

export default SupportScreen;
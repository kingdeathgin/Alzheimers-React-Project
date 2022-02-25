import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import SettingsScreen from './screens/SettingsScreen';
import { AuthContext } from './components/context';
import RootStackScreen from './screens/RootStackScreen';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme} from "react-native-paper"

const Drawer = createDrawerNavigator();


const App = () => {
const [isLoading, setIsLoading] = React.useState(true);
const [userToken, setUserToken] = React.useState(null);

const [isDarkTheme, setIsDarkTheme] = React.useState(false);

const CustomDefaultTheme ={
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333"
  }
}
const CustomDarkTheme ={
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff"
  }
}

const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

const authContext = React.useMemo(() => ({
    signIn: () => {
    setUserToken('fgkj');
    setIsLoading(false)
  },
  signOut: async() => {
    setUserToken(null);
    setIsLoading(false);
  },
  signUp: () => {
    setUserToken('fgkj');
    setIsLoading(false);
  },
  toggleTheme: () => {
    setIsDarkTheme(isDarkTheme => !isDarkTheme)
  }
}));
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if( isLoading ) {
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <PaperProvider theme = {theme}>
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
      {userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent  {...props}/> }>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
      )
    :
    <RootStackScreen />
    }
      
      </NavigationContainer>
      </AuthContext.Provider>
      </PaperProvider>
  );
};

export default App
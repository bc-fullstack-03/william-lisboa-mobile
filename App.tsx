import React, {useContext, useEffect} from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Friends from './src/Screens/Friends';
import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';

import Loading from './src/components/Loading';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from "@expo-google-fonts/inter";
import theme from './src/THEME';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppTheme = {
  ...DefaultTheme,
  dark:true,
  colors: {
    ...DefaultTheme.colors,
    background: theme.COLORS.BACKGROUND_900
  }
}

function App() {
  const { token,tryLocalLogin, isLoading } = useContext(AuthContext);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  useEffect(() => {
    tryLocalLogin();
  }, [])

  if (!fontsLoaded || isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={AppTheme}>
      { token ? (
          <Tab.Navigator>
            <Tab.Screen name="Friends" component={Friends} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown:false,
            statusBarStyle:"dark"
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
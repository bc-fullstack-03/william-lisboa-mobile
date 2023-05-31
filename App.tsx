import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Friends from './src/Screens/Friends';
import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from "@expo-google-fonts/inter";
import theme from './src/THEME';
import Loading from './src/components/Loading';


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
  const isLoggedIn = false;

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={AppTheme}>
      { isLoggedIn ? (
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

export default App;
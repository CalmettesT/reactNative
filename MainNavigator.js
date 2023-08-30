import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeIcon from '@mui/icons-material/Home';

// Importation des écrans
import HomeScreen from './Screens/HomeScreen';
import QuestionScreen from './Screens/QuestionScreen';
import ProfileScreen from './Screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Ceci est la pile d'accueil qui contient tous les écrans liés au flux d'accueil
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ 
          title: 'Accueil',
          headerShown: false,  // Ajoutez cette ligne
          headerTitle: HomeIcon,
        }} 
      />
    </Stack.Navigator>
  );
};

const QuestionStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="QuestionScreen" 
        component={QuestionScreen} 
        options={{ 
          title: 'Questionnaire',
          headerShown: false  // Ajoutez cette ligne
        }} 
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ProfileScreen" 
        component={ProfileScreen} 
        options={{ 
          title: 'Profil',
          headerShown: false  // Ajoutez cette ligne
        }} 
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Questionnaire" component={QuestionStack} />
        <Tab.Screen name="Profil" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Component } from 'react';
import 'react-native-gesture-handler';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator, Header, HeaderBackButton} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import home from './screens/home'
import login from './screens/login';
import tab_home from './screens/tab_home';
import tab_feed from './screens/tab_feed';
import tab_chat from './screens/tab_chat';
import tab_menu from './screens/tab_menu';
import { ScreenStackHeaderLeftView } from 'react-native-screens';



const Tab=createMaterialBottomTabNavigator();

function tab(){
  return(
    
      <Tab.Navigator initialRouteName='tab_home' style={{backgroundColor:'#26baae',}}>
       <Tab.Screen name="Home" component= {tab_home} />
       <Tab.Screen name="Feed" component= {tab_feed} />
       <Tab.Screen name="Chat" component= {tab_chat} /> 
       <Tab.Screen name="Menu" component= {tab_menu} />
      </Tab.Navigator>
    
  );
}

const stack=createStackNavigator();

  const App: () => React$Node = () => {
    return (
       <NavigationContainer>
        <stack.Navigator initialRouteName='home'>
          <stack.Screen name='home' component={home} options={{headerTransparent:true,title:null}}/>
          <stack.Screen name="login" component={login} options={{headerTransparent:true,title:null,headerLeft:null}}/>
          <stack.Screen name="tab" component={tab} options={{headerTransparent:true,title:null,headerLeft:null}}/>
        </stack.Navigator>
        </NavigationContainer>
    

      
    );};

export default App;

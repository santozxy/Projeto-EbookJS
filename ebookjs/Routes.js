
import { createStackNavigator,} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Splash from './Pages/Splash/index'
import Login from './Pages/Login/Index'
import Reset from './Pages/Reset/index'
import Register from './Pages/Register/index'
import Home from './Pages/Home/Index'
import AllEbooks from './Pages/AllEbooks/Index'
import Details from './Pages/Details/Index'
import Favorites from './Pages/Favorites/Index'
import Profile from './Pages/Profile/Index'
import {Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { primary, secundary, terciary } from './colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
      screenOptions = {{
        tabBarShowLabel:false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
          position: 'absolute',
          backgroundColor: '#0B001E',
          borderTopWidth: 0,
          borderRadius: Platform.OS === 'ios' ? 0:20,
          height: Platform.OS === 'ios' ? 70:50,
          right:Platform.OS === 'ios' ? 0:20,
          left:Platform.OS === 'ios' ? 0:20,
          bottom:Platform.OS === 'ios' ? 0:10,
          paddingBottom:Platform.OS === 'ios' ? 15:0,
        }
      }}
    >
      <Tab.Screen 
        name = 'Home' 
        component = {Home}
        options = {{ 
          headerShown:false,
          tabBarIcon: ({color,size,focused})=> {

            if(focused){
              return <Ionicons 
              name = "home" 
              size = {Platform.OS === 'ios' ? 38:30} 
              color = {secundary} 
              />
            }
              return <Ionicons 
                name = "home-outline" 
                size = {Platform.OS === 'ios' ? 38:30} 
                color = {color}  
              />
            }
        }}
      />
      <Tab.Screen 
        name = 'Favorites' 
        component = {Favorites}
        options = {{
          headerShown: false,
          tabBarIcon: ({color,size,focused})=> {
            if(focused){
              return <Ionicons 
                name = 'bookmarks' 
                size = {Platform.OS === 'ios' ? 38:30} 
                color = {secundary}  
              />
            }
              return <Ionicons 
                name = "bookmarks-outline" 
                size = {Platform.OS === 'ios' ? 38:30} 
                color = {color}  
              />
            }
      }}
      />
      <Tab.Screen 
        name = 'Profile' 
        component = {Profile}
        options = {{
          headerShown: false,
          tabBarIcon: ({color,size,focused})=> {

            if(focused){
              return <Ionicons 
                name = "person" 
                size = {Platform.OS === 'ios' ? 38:30} 
                color = {secundary}  
              />
            }
              return <Ionicons 
                name = "person-outline" 
                size = {Platform.OS === 'ios' ? 38:30} 
                color = {color}  
            />
          }
        }}
      />
    </Tab.Navigator>
  )
}

function Routes() {
  return(
   
    <Stack.Navigator screenOptions = {{headerShown:false,}}>
    
      {Platform.OS === 'web' ? null:
      <Stack.Screen
        name = "Splash"
        component = {Splash}     
      />
      }
     <Stack.Screen
        name = "Login"
        component = {Login}     
      />
      <Stack.Screen
        name = "Reset"
        component = {Reset}    
      />
      <Stack.Screen
        name = "Register"
        component = {Register}
      />
      <Stack.Screen
        name = "Home"
        component = {Tabs}
      />
      <Stack.Screen 
        name = "Details"
        component = {Details}
      />
      <Stack.Screen 
        name = "AllEbooks"
        component = {AllEbooks}
      />
      
    </Stack.Navigator>
  )
}



export default Routes
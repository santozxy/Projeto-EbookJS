import React, { useState,useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ImageBackground,
  ActivityIndicator,
  ScrollView,StatusBar,
  KeyboardAvoidingView
} from 'react-native';
import SplashAnmation from './SplashAnimation'
import EbookAnimation from './EbookAnimation'
import {primary,secundary,terciary} from '../../colors'


export default function Splash(){
  return(
    <View style = {styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={primary}
        translucent={false}
        networkActivityIndicatorVisible={true}
        animated={true}
        showHideTransition={'slide'}
      />
      <View style = {styles.content}>
        {Platform.OS === 'web' ? null:<SplashAnmation/>}
      </View>

      <View style = {styles.content}>
        {Platform.OS === 'web' ? null:<EbookAnimation/>}
      </View>
    
      <View style = {styles.content}>
        <Text style = {styles.title}> EbookJs </Text>
      </View>

      <View style = {styles.content}>
        {Platform.OS === 'web' ? null:<SplashAnmation/>}
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
    alignItems:'center',
    justifyContent:'center'
  },
  content: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  title: {
    textAlign: 'center',
    color: terciary,
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 50:60,
    shadowColor:terciary,
    shadowOpacity: 0.8,
    shadowRadius: 10.0,
    elevation:0.6
  }

});
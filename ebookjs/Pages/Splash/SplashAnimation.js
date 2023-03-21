import {Text,View,StyleSheet,StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native'
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
export default function SplashAnmation(){
  return(
    <View>
      <LottieView
          source = {require('../../Assets/Sparkles.json')}
          autoPlay
          style = {styles.animation}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  animation: {
    width:Platform.OS === 'ios' ? 600:650,
    height:Platform.OS === 'ios' ? 600:650,
    },
})
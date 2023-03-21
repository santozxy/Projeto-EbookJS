import {Text,View,StyleSheet,StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native'
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
export default function EbookAnimation(){
  const navigation = useNavigation()
  return(
    <View>
      <LottieView
          source = {require('../../Assets/book.json')}
          autoPlay
          loop = {false}
          onAnimationFinish = {()=> navigation.dispatch(StackActions.replace('Login'))} 
          style = {styles.animation}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  animation: {
    width:Platform.OS === 'ios' ? 400:350,
    height:Platform.OS === 'ios' ? 400:350,
    },
})
import {View,StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native'

export default function ResetAnimation(){
  
  return(
    <View>
      <LottieView
          source = {require('../../Assets/ForgotPassAnimation.json')}
          autoPlay = {true}
          loop = {true}
          style = {styles.animation}
          resizeMode = 'cover'
      />
    </View>
  )
}


const styles = StyleSheet.create({
  animation: {
    width:Platform.OS === 'ios' ? 230:200,
    height:Platform.OS === 'ios' ? 230:200,
    },
})
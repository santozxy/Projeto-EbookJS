
import {View,StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native'

export default function LoginAnimation(){
  
  return(
    <View>
      <LottieView
          source = {require('../../../Assets/WelcomeAnimation.json')}
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
    width:Platform.OS === 'ios' ? 350:250,
    height:Platform.OS === 'ios' ? 320:250,
    },
})
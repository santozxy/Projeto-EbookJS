
import {View,StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native'
export default function LoadingAnimation(){
  
  return(
    <View>
      <LottieView
          source = {require('../../../Assets/Await.json')}
          autoPlay = {true}
          loop = {true}
          style = {styles.animation}
          speed = {3}
          resizeMode = 'cover'
      />
    </View>
  )
}


const styles = StyleSheet.create({
  animation: {
    width:120,
    height:120,
  },
})

import {View,StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native'
export default function RobotAnimation(){
  
  return(
    <View>
      <LottieView
          source = {require('../../../Assets/robotAnimation.json')}
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
    width:45,
    height:45,
  },
})

import {View,StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native'

export default function RegisterAnimation(){
  
  return(
    <View>
      <LottieView
          source = {Platform.OS === 'ios' ? require('../../Assets/RegisterIOSAnimation.json'):require('../../Assets/RegisterAndroidAnimation.json')}
          autoPlay = {true}
          loop = {false}
          style = {styles.animation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  animation: {
    width:Platform.OS === 'ios' ? 250:230,
    height:Platform.OS === 'ios' ? 250:230,
    },
})
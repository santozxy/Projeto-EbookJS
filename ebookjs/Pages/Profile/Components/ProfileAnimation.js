import react,{useState} from 'react'
import {View,StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native'
import {primary,secundary,terciary} from '../../../colors'

export default function ProfileAnimation(){
  const [view,setView] = useState(true)
  return(
    <View>
      <LottieView
          source = {require('../../../Assets/ProfileAnimation.json')}
          autoPlay = {view}
          loop = {false}
          style = {view === true ? styles.animation:styles.noAnimated}
          resizeMode = 'cover'
          onAnimationFinish ={()=> setView(!view)}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  noAnimated:{
  },
  animation: {
    width:Platform.OS === 'ios' ? 870:850,
    height:Platform.OS === 'ios' ? 870:850,
    },
})
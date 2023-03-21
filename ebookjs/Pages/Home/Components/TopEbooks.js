import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Platform,
  ActivityIndicator,
  ScrollView,
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {database} from '../../../firebase'
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import { primary, secundary, terciary } from '../../../colors';
import {Ionicons} from '@expo/vector-icons'
import LoadingAnimation from './LoadingAnimation'

export default function TopEbook(props) {

  const [ebook, setEbook] = useState([]);
  const [loading,setLoading] = useState(true)
  const navigation = useNavigation()

  render = ({ item,index }) =>{
      return(
        <LinearGradient 
          colors = {[primary,item.palheta,item.palheta,item.palheta,item.palheta,primary]}
          style = {{flex:1,borderBottomRadius:20}}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', { item })} 
            style={styles.button} onBlur>
            <Image style={styles.image} source={{ uri: item.capa }} />
          </TouchableOpacity>
        </View>
        </LinearGradient>
      ) 
  }


  prevButton = () => {
    return (
      <View style={styles.circleButton}>
        <Ionicons
          name="arrow-back-sharp"
          color= {terciary}
          size={45}
        />
      </View>
    );
  };
  nextButton = () => {
    return (
      <View style={styles.circleButton}>
        <Ionicons
          type = "Ionicons"
          name="arrow-forward"
          color={terciary}
          size={45}
          style = {{marginLeft:10}}
        />
      </View>
    );
  };

 useEffect(() => {
    database.collection("Ebooks").where("imdb",">=", 9.7).onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        console.log("Obter ebook")
        list.push({ ...doc.data(), id: doc.id });
        console.log("Ebooks Obtidos")
      });
      setEbook(list)
      console.log("Concluido");
      setLoading(false)
    });
  }, []);
  return (
    <ScrollView style = {styles.container}>
      {
        loading ? Platform.OS === 'web' ? <ActivityIndicator size = "large" color = {secundary} />:
          <View style = {{alignItems:'center',justifyContent:'center'}}>
            <LoadingAnimation/>
          </View>:
          <AppIntroSlider
            data={ebook}
            showDoneButton= {false}
            showNextButton
            showPrevButton 
            renderNextButton = {nextButton}
            renderPrevButton = {prevButton}
            activeDotStyle = {{backgroundColor: terciary}}
            renderItem={render} 
          />
      }
    </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    shadowColor:primary,
    shadowOpacity: 0.8,
    shadowRadius: 10.0,
    elevation:0.6,
  },
  button: {
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  image: {
    height: 500,
    width: 300,
    borderRadius: 20,
  },
  circleButton:{
  }
});

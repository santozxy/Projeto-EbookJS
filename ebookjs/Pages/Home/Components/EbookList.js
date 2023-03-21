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
  RefreshControl
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {database} from '../../../firebase'
import { LinearGradient } from 'expo-linear-gradient';
import LoadingAnimation from './LoadingAnimation'
import { primary, secundary, terciary } from '../../../colors';

export default function EbooksList(props) {
  const campo = props.campo
  const valor = props.valor
  const [ebook, setEbook] = useState([]);
  const [loading,setLoading] = useState(true)
  const navigation = useNavigation();

 useEffect(() => {
    database.collection("Ebooks").where(campo,"==", valor).onSnapshot((query) => {
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
          <FlatList
            horizontal
            data={ebook}
            renderItem={({ item }) => 
             <LinearGradient 
                colors = {[item.palheta,item.palheta,item.palheta,item.palheta,primary,primary]}
                style = {{flex:1,marginHorizontal:10,borderRadius:10}}>
            <View style={styles.content}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', { item })} 
                style={styles.button} onBlur>
                <Image style={styles.image} source={{ uri: item.capa }} resizeMode= "cover"/>
              </TouchableOpacity>
            </View>
            </LinearGradient>
            } 
          />
      }
      <TouchableOpacity
        onPress={() => navigation.navigate('AllEbooks', { campo,valor })} 
        style={styles.buttonAllEbooks} onBlur>
        <Text style={styles.subTitle}> ↳ Ver Tudo </Text>
      </TouchableOpacity>
      
    </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    flex:1,
    shadowColor:primary,
    shadowOpacity: 0.8,
    shadowRadius: 10.0,
    elevation:0.6,
    borderRadius: 10,
    borderColor:terciary
  },
  subTitle: {
    fontWeight:'bold',
    fontSize: 20,
    color: terciary,
    textAlign: 'right',
    fontFamily: 'roboto',
    marginRight:Platform.OS ==="ios" ? null:10
  },
  button: {
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  buttonAllEbooks:{
    borderRadius: 10,
  },
  image: {
    height: 400,
    width: 250,
    borderRadius: 15,
  },
});


/*async function fetchImages(){
    console.log('Looking for images');
    setLoading(true)
    const itemsTmp = []
    for(it of ebooks){
      console.log(`Looking for image = ${it.capa}`);
      const response = await fetch(it.capa);
      const data = await response.blob();
      const image = URL.createObjectURL(data);
      itemsTmp.push({capa:image});
      console.log(`Image found`);
    }
    setItems(itemsTmp);
    setLoading(false)
    console.log("Image found");
  }

  useEffect(() => fetchImages(),[]);*/
    /*{
        loading ?
          <ActivityIndicator/>:*/

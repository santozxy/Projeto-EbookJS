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
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {database} from '../../firebase'
import { LinearGradient } from 'expo-linear-gradient';
import LoadingAnimation from '../Home/Components/LoadingAnimation'
import { primary, secundary, terciary } from '../../colors';
import { Input,Icon } from 'react-native-elements';

export default function AllEbooks({navigation,route}) {
  const campo = route.params.campo
  const valor = route.params.valor
  const [ebook, setEbook] = useState([]);
  const [search,setSearch] = useState("")
  const [loading,setLoading] = useState(true)

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
    <SafeAreaView style = {styles.container}>
      <Input
        style = {{color:terciary}}
        value = {search}
        onChangeText ={(search) => setSearch(search)}
        placeholder='Pesquisar'
        placeholderTextColor =  {terciary}
        selectTextOnFocus 
        leftIcon= { 
          <Icon 
            size = {24}
            name = 'search'
            color = {terciary} /> 
        }
      />
      <ScrollView 
        horizontal 
        style = {{marginLeft:20}}
        bouncesZoom={true}
        maximumZoomScale={3.0}
        showsVerticalScrollIndicator = {false}>
        {
          loading ?  
          <ActivityIndicator size = "large" color = {secundary} />
          :
          <FlatList
            numColumns={3}
            data={ebook}
            renderItem={({ item }) => 
            <LinearGradient 
              colors = {[item.palheta,item.palheta,item.palheta,item.palheta,primary,primary]}
              style = {{flex:1,borderRadius:10,marginTop:10,marginHorizontal:10}}>
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
      </ScrollView>
          
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:primary,
  },
  content:{
    flex:1,
    shadowColor:primary,
    shadowOpacity: 0.8,
    shadowRadius: 10.0,
    elevation:0.6,
  },
  subTitle:{
    fontWeight:'bold',
    fontSize: 22,
    color: terciary,
    fontFamily: 'roboto'
  },
  button: {
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  image: {
    height: 350,
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

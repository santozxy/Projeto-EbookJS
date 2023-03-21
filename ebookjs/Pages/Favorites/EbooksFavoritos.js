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
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {database} from '../../firebase'
import { LinearGradient } from 'expo-linear-gradient';
import { primary, secundary, terciary } from '../../colors';
import LoadingAnimation from '../Home/Components/LoadingAnimation'

export default function EbooksFavoritos(props) {
  const campo = props.campo
  const valor = props.valor
  const [ebook, setEbook] = useState([]);
  const [loading,setLoading] = useState(true)
  const navigation = useNavigation();

 useEffect(() => {
    database.collection("Ebooks").where(campo,"==",valor).onSnapshot((query) => {
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
          </View>
        :
        <FlatList
          horizontal
          data={ebook}
          renderItem={({ item }) => 
          <LinearGradient 
                colors = {[item.palheta,item.palheta,item.palheta,item.palheta,primary,primary]}
                style = {{flex:1,marginHorizontal:10,borderRadius:10}}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { item })}
              style={styles.button} onBlur>
              <Image style={styles.image} source={{uri: item.capa}} resizeMode="cover"/>
            </TouchableOpacity>
          </View>
          </LinearGradient>
          }
        />
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize:25,
    fontWeight:'bold',
    color: terciary,
    textAlign:'center'
  },
  button: {
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 200,
    borderRadius: 15,
  },
});


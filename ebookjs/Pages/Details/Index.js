import React,{useEffect,useState} from 'react'
import {Text,View,StyleSheet,ScrollView,Image,Platform,TouchableOpacity,Linking,StatusBar} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome,Feather} from '@expo/vector-icons';
import {primary,secundary,terciary} from '../../colors'

export default function Details({route}){
  const item = route.params.item
  const [favoritado, setFavoritado] = useState(false)
  return(
    <ScrollView style = {styles.container}>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor =  {item.palheta}
        translucent = {false}
        networkActivityIndicatorVisible = {true}
        animated = {true}
        showHideTransition = {'slide'}
      />
      <LinearGradient
        colors={[item.palheta, primary, primary, primary, item.palheta]}
        style={styles.container}>

      <Text style = {styles.title}> {item.title} </Text>

      <View style = {styles.content}>

         <LinearGradient
            colors={[item.palheta, primary, primary, item.palheta]}
            style={styles.content}>
            
        <View style ={{alignItems:'center'}}>
          <Image source = {{uri:item.capa}} style = {styles.image}/>
        </View>

        <View style = {styles.contentInfo}>
          <Text style = {styles.info}>Autor: {item.autor}</Text>    
          <Text style = {styles.info}>Gênero: {item.genero}</Text> 
          <Text style = {styles.info}>Lançamento: {item.ano}</Text>
          <Text style = {styles.info}>Origem: {item.origem}</Text>
          <Text style = {styles.info}>Páginas: {item.paginas} </Text>
          <Text style = {styles.info}>Imdb: {item.imdb}</Text>
        </View>
        
         <View style ={{flexDirection:'row',justifyContent:'space-between'}}>
         
          <TouchableOpacity onPress = {() => {item.linkPdf == null ? disable:Linking.openURL(item.linkPdf)}}  style ={{marginHorizontal:10}} onBlur>
            <Feather color = {terciary} name = "download" size = {Platform.OS === 'ios' ? 35:25} /> 
          </TouchableOpacity>
          
          <TouchableOpacity onPress = {() => {item.linkPdf == null ? disable:Linking.openURL(item.linkPdf)}}  style ={{marginHorizontal:10}} onBlur>
            <Ionicons color = {terciary} name = "share-social-outline" size = {Platform.OS === 'ios' ? 35:25} /> 
          </TouchableOpacity>
     
        </View>

        <Text style = {styles.titleSinopse}> Sinopse </Text>
        <Text style = {styles.sinopse}> {item.descricao}</Text>

        <View style={{marginHorizontal:30,marginBottom:10,borderRadius:20}}>
          <LinearGradient
            colors={[primary, item.palheta]}
            style={{borderRadius:20,borderColor:terciary,borderWidth:2}}>

          <TouchableOpacity 
            onPress = {()=> {setFavoritado(!favoritado)}} style = {{padding:5}} onBlur>
            <Text style = {{color: terciary,fontSize:20,fontWeight:'bold',textAlign:'center'}}> {favoritado ? "Favoritado":"Favoritar"} </Text>
          </TouchableOpacity>
          
          </LinearGradient>
        </View>

        </LinearGradient>
      </View>
      </LinearGradient>
      <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style = {styles.sinopse}> © 2022 EbookJs </Text>
      <Text style = {styles.sinopse}>Monnuery Júnior </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: primary,
    
  },
  content:{
    marginHorizontal:10,
    shadowColor:primary,
    shadowOpacity: 0.8,
    shadowRadius: 10.0,
    elevation:0.6,
    borderRadius:20,
  },
  contentInfo:{
    textAlign:'center',
    borderColor:'#fff',
    borderRadius: 15,
    shadowColor: primary,
    shadowOpacity: 0.8,
    shadowRadius: 10.0,
    elevation:0.1,
    borderBottomWidth:2
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    color: terciary,
    textAlign:'center',
    marginTop:Platform.OS === 'ios' ? 50:30,
    marginBottom:Platform.OS === 'ios' ? 20:30
  },
  info:{
    fontSize:16,
    color: terciary,
    textAlign:'center',
    marginHorizontal:10,
    marginVertical:15,
    fontWeight:'bold'
  },
   titleSinopse:{
    fontSize:25,
    fontWeight:'bold',
    fontFamily:'Open Sans',
    color: terciary,
    textAlign:'center',
    marginBottom:Platform.OS === 'ios' ? 20:10
  },
  sinopse:{
    fontSize:16,
    color: terciary,
    textAlign:'center',
    marginTop:Platform.OS === 'ios' ? 10:0,
    marginBottom:Platform.OS === 'ios' ? 40:20
  },
  image: {
    height: 550,
    width: Platform.OS === 'ios' ? 375:360,
    borderRadius: 20,
    
  },
})
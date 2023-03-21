import react, { useEffect, useState,useCallback } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import RobotAnimation from './Components/RobotAnimation';
import EbookList from './Components/EbookList';
import TopEbook from './Components/TopEbooks'
import LoadingAnimation from './Components/LoadingAnimation'
import { Input,Icon } from 'react-native-elements';
import { primary, secundary, terciary } from '../../colors';

export default function Home({ navigation }) {
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {

    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
     <SafeAreaView style= {styles.container}>
    <ScrollView
      style={styles.container}
      bouncesZoom={true}
      maximumZoomScale={3.0}
      showsVerticalScrollIndicator = {false}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh} 
        />
      }
      >
        <View style={styles.header}>
          <Text style={styles.title}> Ebook.Js </Text>
          {Platform.OS === 'web' ? null : <RobotAnimation/>}
          <Input
            style = {styles.input}
            value = {search}
            onChangeText ={(search) => setSearch(search)}
            placeholder='Pesquisar'
            placeholderTextColor =  {terciary}
            leftIcon= { 
              <Icon 
                size = {25}
                name = 'search'
                color = {terciary} /> 
            }
          />
        </View>
  
        <ScrollView style={styles.content} >
          <Text style={styles.subTitle}> Populares </Text>
          {refreshing ? 
          <View style = {{alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size="large" color={secundary}/>
          </View>
          :
          <TopEbook/>
          }
        </ScrollView>
        
        <ScrollView style={styles.content} >
          <Text style={styles.subTitle}> Obras Nacionais </Text>
          {refreshing ? 
          <View style = {{alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size="large" color={secundary}/>
          </View>
          :
          <EbookList campo = "origem" valor = "Nacional"/>
          }
        </ScrollView>
        

        <ScrollView style={styles.content} >
          <Text style={styles.subTitle}> Terror </Text>
          {refreshing ? 
          <View style = {{alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size="large" color={secundary}/>
          </View>
          :
          <EbookList campo = "genero" valor = "Terror"/>
          }
        </ScrollView>
        
        <ScrollView style={styles.content} >
          <Text style={styles.subTitle}> Romance </Text>
          {refreshing ? 
          <View style = {{alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size="large" color={secundary}/>
          </View>
          :
          <EbookList campo = "genero" valor = "Romance"/>
          }
        </ScrollView>
        
        <ScrollView style={styles.content} >
          <Text style={styles.subTitle}> Ficção </Text>
          {refreshing ? 
          <View style = {{alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size="large" color={secundary}/>
          </View>
          :
          <EbookList campo = "genero" valor = "Ficção"/>
          }
        </ScrollView>   
        
        <ScrollView style={styles.content} >
          <Text style={styles.subTitle}> Suspense </Text>
          {refreshing ? 
          <View style = {{alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size="large" color={secundary}/>
          </View>
          :
          <EbookList campo = "genero" valor = "Suspense"/>
          }
        </ScrollView>
    
        <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style = {styles.sinopse}> © 2022 EbookJs </Text>
          <Text style = {styles.sinopse}> React Native </Text>
        </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },
   content: {
    flex: 1,
    marginVertical: Platform.OS === 'ios' ? 50 : 50,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: terciary,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    flex:1,
    color: terciary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
  },

  subTitle: {
    fontWeight:'bold',
    fontSize: 25,
    color: terciary,
    textAlign: 'left',
    marginVertical: 20,
    paddingHorizontal: 20,
    fontFamily: 'roboto',
  },
  sinopse:{
    fontSize:16,
    color: terciary,
    textAlign:'center',
    marginTop:Platform.OS === 'ios' ? 10:0,
    marginBottom:Platform.OS === 'ios' ? 40:20
  },
});


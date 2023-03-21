import { useCallback, useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Platform,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator,
  Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import { StackActions } from '@react-navigation/native';
import ProfileAnimation from './Components/ProfileAnimation';
import { primary, secundary, terciary } from '../../colors';

export default function Profile({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style = {{color:secundary}}/>
        }>
        <Text style={styles.title}>Seu Perfil</Text>
        
        <View style = {{flex:1,alignItems:'center'}}>
          <Image source = {require('../../Assets/programmer.png')} style = {{width:200,height:200}}
          />
        </View>
        <View style={styles.content}>
          <LinearGradient
            colors={[secundary, primary, primary]}
            style={styles.content}>
            <TouchableOpacity
              onPress={null}
              style={{ marginLeft: Platform.OS === 'ios' ? 270 : 240 }}
              onBlur>
              <Icon
                size={25}
                type="font-awesome"
                name="edit"
                color={terciary}
              />
            </TouchableOpacity>

            <Text style={styles.subTitle}> Informações Pessoais </Text>

            {refreshing ? 
              <ActivityIndicator size="large" color={secundary} />
             : 
             <View style = {{flex:1}}>
              <View style={{flexDirection: 'row',justifyContent: 'space-around',}}>
                <Text style={styles.info}> Nome: Monnuery </Text>
                <Text style={styles.info}> Sobrenome: Júnior </Text>
              </View>

               <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={styles.info}> Gênero: Masculino </Text>
                <Text style={styles.info}> Idade: 19 </Text>
              </View>
              <View style = {{alignItems:"center"}}>
                <Text style={styles.info}>
                  <Icon size={18} name="date-range" color={terciary} /> Data de
                  nascimento: 29/05/2003
                </Text>
               </View>
            </View>
            }
          </LinearGradient>
        </View>

        <View style={styles.content}>
          <LinearGradient
            colors={[secundary, primary, primary]}
            style={styles.content}>
            <TouchableOpacity
              onPress={null}
              style={{ marginLeft: Platform.OS === 'ios' ? 270 : 240 }}
              onBlur>
              <Icon
                size={25}
                type="font-awesome"
                name="edit"
                color={terciary}
              />
            </TouchableOpacity>

            <Text style={styles.subTitle}> Contato </Text>
            {refreshing ? 
              <ActivityIndicator size="large" color={secundary} />
             : 
            <View style = {{flex:1}}>
              <Text style={styles.info}>
                <Icon size={18} name="email" color={terciary} /> Email:
                junior_monnu@outlook.com
              </Text>

              <Text style={styles.info}>
                <Icon size={18} name="smartphone" color={terciary} /> Número: +55
                86 998480162
              </Text>

              <Text style={styles.info}>
                <Icon size={18} name="phone" color={terciary} /> Telefone Fixo:
                4002-8922
              </Text>
             </View>
            }
          </LinearGradient>
        </View>

        <View style={{flex:1,marginBottom:50}}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(StackActions.replace('Login'))}
            style={{
              backgroundColor: secundary,
              borderRadius: 20,
              alignItems:'center'
            }}
            onBlur>
            <Text style={{ textAlign: 'center', color: terciary }}>
              {' '}
              <Icon size={18} name="logout" color={primary} /> Logout{' '}
            </Text>
          </TouchableOpacity>
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
    marginHorizontal: Platform.OS === 'ios' ? 10 : 0,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    marginBottom: 10,
    shadowColor: primary,
    shadowOpacity: 0.8,
    shadowRadius: 10.0,
    elevation: 0.1,
    borderRadius: 20,
   
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: terciary,
    marginVertical: Platform.OS === 'ios' ? 10 : 15,
    textAlign: 'center',
  },
  subTitle: {
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: 'bold',
    color: terciary,
    textAlign: 'center',
    marginBottom: 15,
    marginHorizontal: 10,
  },
  info: {
    fontSize: Platform.OS === 'ios' ? 13 : 16,
    color: terciary,
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
});

/*<View style = {{alignItems:'center',flex:1}}>
        <ProfileAnimation/>
      </View>*/

import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ImageBackground,
  ActivityIndicator,
  ScrollView,StatusBar,
  KeyboardAvoidingView
} from 'react-native';

import {primary,secundary,terciary} from '../../colors'
import { StackActions } from '@react-navigation/native';
import LoginAnimation from './Components/LoginAnimation';
import { Input,Icon } from 'react-native-elements';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Login({ navigation }) {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [view, setView] = React.useState(true);
  const [errorloLogin, setErrorloLogin] = React.useState("");


  return (
    
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor =  {primary}
        translucent = {false}
        networkActivityIndicatorVisible
        animated
        showHideTransition = {'slide'}
      />
      <LinearGradient
        colors={[secundary, primary, primary]}
        style={styles.container}>

      <View style={styles.content}>
        <LinearGradient
        colors={[secundary, primary, primary]}
        style={styles.content}>

        <Text style={styles.title}>EbookJs</Text>
        <View
          style={{
            alignItems: 'center',
            marginTop: Platform.OS === 'ios' ? 10 : 10,
          }}>
          {Platform.OS === 'web'? null:<LoginAnimation />}
        </View>

          <Input
            style = {{color:terciary}}
            value = {login}
            onChangeText ={(login) => setLogin(login)}
            placeholder=' Login '
            placeholderTextColor =  {terciary}
            leftIcon={ 
              <Icon 
                size = {24}
                name = 'account-circle'
                color = {terciary} /> }
          />
        <Input
            style = {{color:terciary}}
            value = {password}
            onChangeText ={(password) => setPassword(password)}
            secureTextEntry={view}
            placeholder=' Senha '
            placeholderTextColor = {terciary}
            selectTextOnFocus 
            leftIcon={{ type: 'fontisto', name: 'locked', color: terciary}}
            rightIcon={  
              <Icon  
                type = 'entypo' 
                size = {24} 
                name = { view == true ? 'eye': 'eye-with-line'}  
                color = {terciary}
                onPress ={() => setView(!view)}
              /> 
            }
        />
        <View style = {{flexDirection:'row',justifyContent:'space-around'}}>
        </View>
        <TouchableOpacity style={styles.buttonLogin} onPress={()=> navigation.dispatch(StackActions.replace('Home'))} onBlur>
          <Text style={styles.buttonTextLogin}>
            Entrar <Ionicons name="enter" size={18} color= {terciary} />{' '}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={()=>  navigation.navigate('Reset')} style={styles.buttons} onBlur>
            <Text style={styles.textButtons}> Esqueceu a senha ? </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>  navigation.navigate('Register')} style={styles.buttons} onBlur>
            <Text style={styles.textButtons}> Criar uma conta </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentSocialMedia}>
          <FontAwesome
            name="twitter-square"
            size={Platform.OS === 'ios' ? 55 : 50}
            color={terciary}
          />
          <FontAwesome
            name="facebook-square"
            size={Platform.OS === 'ios' ? 55 : 50}
            color= {terciary}
          />
          <FontAwesome
            name="github-square"
            size={Platform.OS === 'ios' ? 55 : 50}
            color= {terciary}
          />
          <FontAwesome
            name="google-plus-square"
            size={Platform.OS === 'ios' ? 55 : 50}
            color= {terciary}
          />
        </View>
        </LinearGradient>
      </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },
  content: {
    marginHorizontal:10,
    marginTop:Platform.OS === 'ios' ? 30:10,
    marginBottom:Platform.OS === 'ios' ? 30:30,
    shadowColor: primary,
    shadowOpacity: 0.8,
    shadowRadius: 10.0,
    elevation:0.1,
    borderRadius:20
  },
  contentSocialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Platform.OS === 'ios' ? 50 : 80,
  },
  title: {
    textAlign: 'center',
    color: terciary,
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 30:40,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },

  buttonLogin: {
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: terciary,
    backgroundColor: primary,
    marginHorizontal: Platform.OS === 'ios' ? 10 : 10,
  },
  buttons: {
    borderBottomWidth: 2,
    borderRadius: 15,
    borderColor: terciary,
  },
  textButtons: {
    color: terciary,
    fontSize: Platform.OS === 'ios' ? 16 : 21,
  },
  buttonTextLogin: {
    color: terciary,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Login;

import react,{useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Alert,
  Platform,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import { Input,Icon } from 'react-native-elements';
import ResetAnimation from './ResetAnimation'
import { LinearGradient } from 'expo-linear-gradient';
import {primary,secundary,terciary} from '../../colors'

function Reset({ navigation }) {
  function goLogin() {
    Alert.alert(
      "Link para recuperação da senha enviado ao email cadastrado !"
    );
    navigation.navigate("Login");
  }
const [login,setLogin] = useState('')
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
       <LinearGradient
        colors={[secundary, primary, primary]}
        style={styles.container}>
         
        <View style={styles.content}>
         <LinearGradient
            colors={[secundary, primary, primary]}
            style={styles.content}>
            
          <View style={{alignItems:'center',marginTop:40,}}>
            {Platform.OS === 'web' ? null:<ResetAnimation/>}
          </View>
          <Text style={styles.title}> Olá, {login} </Text>

          <Input
            style = {{color:terciary}}
            placeholderTextColor= {terciary}
            value={login}
            onChangeText={(login) => setLogin(login)}
            placeholder=" ➤ Login:"
            rightIcon={  
              <Icon 
                size = {30}
                name = 'account-circle'
                color = '#fff' /> 
            }
          />
          <Input
            style = {{color:terciary}}
            placeholderTextColor={terciary}
            placeholder=" ➤ Email:"
            rightIcon={  
              <Icon 
                size = {30}
                name = 'email'
                color = {terciary} /> 
            }
          />
          <Input
            style = {{color:terciary}}
            placeholderTextColor={terciary}
            placeholder=" ➤ Confirmar Email:"
            rightIcon={  
              <Icon 
                size = {30}
                name = 'check-circle'
                color = {terciary} />
             }
          />

          <TouchableOpacity style={styles.buttonReset} onPress={goLogin} onBlur>
            <Text style={styles.buttonText}> Recuperar </Text>
          </TouchableOpacity>
          </LinearGradient>
        </View>
       </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary
  },
  content:{
    marginHorizontal:10,
    marginTop:Platform.OS === 'ios' ? 30:10,
    marginBottom:Platform.OS === 'ios' ? 30:30,
    shadowColor: primary,
    shadowOpacity: 0.8,
    shadowRadius: 10.0,
    elevation:0.1,
    borderRadius:20
  },
  title: {
    textAlign: 'center',
    color: terciary,
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: Platform.OS === 'ios' ? 10:10,
  },
  buttonReset: {
    justifyContent: 'center',
    marginTop: 40,
    alignItems: 'center',
    marginBottom: 25,
    borderWidth:1,
    borderRadius:15,
    borderColor: terciary,
    backgroundColor: primary,
    marginHorizontal:25
    },
  buttonText: {
    color: terciary,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Reset;

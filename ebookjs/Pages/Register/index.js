import {useState}from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import { Input, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import RegisterAnimation from './RegisterAnimation';
import {database} from '../../firebase'
import { primary, secundary, terciary } from '../../colors';

function Register({ navigation }) {
  const [login,setlogin] = useState("")
  const [email,setEmail] = useState("")
  const [password,setpassword] = useState("")

  function goLogin() {
    Alert.alert('Cadasto realizado com sucesso !');
    navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <LinearGradient
        colors={[secundary, primary, primary]}
        style={styles.container}>
        <View style={styles.content}>
          <LinearGradient
            colors={[secundary, primary, primary]}
            style={styles.content}>
            <Text style={styles.titleList}> Cadastro </Text>
            <View style={{ alignItems: 'center' }}>
              {Platform.OS === 'web' ? null : <RegisterAnimation />}
            </View>
            <Input
              placeholderTextColor={terciary}
              style={styles.input}
              placeholder="➤ Login:"
              value = {login}
              onChangeText = {(login) => setlogin(login)}
              color={terciary}
              rightIcon={
                <Icon size={30} name="account-circle" color={terciary} />
              }
            />
            <Input
              placeholderTextColor="#fff"
              style={styles.input}
              placeholder="➤ Email:"
              value = {email}
              onChangeText = {(email) => setEmail(email)}
              color={terciary}
              rightIcon={<Icon size={30} name="email" color={terciary} />}
            />
      
            <Input
              placeholderTextColor={terciary}
              style={styles.input}
              placeholder="➤ Password:"
              value = {password}
              onChangeText = {(password) => setpassword(password)}
              color={terciary}
              rightIcon={<Icon size={30} name="lock" color={terciary} />}
            />

            <TouchableOpacity
              style={styles.buttonRegister}
              onPress={goLogin}
              onBlur>
              <Text style={styles.buttonText}> Concluir </Text>
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
    backgroundColor: primary,
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    marginBottom: Platform.OS === 'ios' ? 30 : 30,
    shadowColor: primary,
    shadowOpacity: 0.8,
    shadowRadius: 10.0,
    elevation: 0.1,
    borderRadius: 20,
  },
  titleList: {
    textAlign: 'center',
    color: terciary,
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 10,
  },
  input: {
    color: terciary,
    justifyContent: 'center',
    borderColor: secundary,
  },
  buttonText: {
    color: terciary,
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonRegister: {
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: terciary,
    backgroundColor: primary,
    marginHorizontal: 10,
  },
});

export default Register;

import react, { useEffect, useCallback, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Platform,
} from 'react-native';
import { primary, secundary, terciary } from '../../colors';
import EbooksFavoritos from './EbooksFavoritos';
import LoadingAnimation from '../Home/Components/LoadingAnimation';
export default function Favorites() {
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
        showsVerticalScrollIndicator={false}
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            style={{ color: secundary }}
          />
        }>
         <Text style={styles.title}> Biblioteca </Text>
        <View style={styles.content}>
          <Text style={styles.subTitle}> Desejo Ler: </Text>
          {refreshing ? (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <LoadingAnimation />
            </View>
          ) : (
            <EbooksFavoritos campo="genero" valor="Suspense" />
          )}
        </View>
        <View style={styles.content}>
          <Text style={styles.subTitle}> Marcados como Lido: </Text>
          {refreshing ? (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <LoadingAnimation />
            </View>
          ) : (
            <EbooksFavoritos campo="genero" valor="Romance" />
          )}
        </View>
        <View style={styles.content}>
          <Text style={styles.subTitle}> Marcados como Favorito: </Text>
          {refreshing ? (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <LoadingAnimation />
            </View>
          ) : (
            <EbooksFavoritos campo="genero" valor="Ficção" />
          )}
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
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 23 : 25,
    fontWeight: 'bold',
    color: terciary,
    marginVertical: 20,
    textAlign:'center'
  },
  subTitle: {
    fontSize: Platform.OS === 'ios' ? 20 : 20,
    fontWeight: 'bold',
    color: terciary,
    marginVertical: 10,
  },
});

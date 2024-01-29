import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [cliques, setCliques] = useState(0)
  function clicou(){
    setCliques(cliques + 1)
  }
  function remover(){
    setCliques(cliques - 1)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.textinho}>Olá, Mundo!</Text>
        <Button title={'Clique Aqui'} onPress={() => alert('Voce clicou')}></Button>

        <Image source={require('./assets/icon.png')}
               style={{width: 200, height: 200}}>
        </Image>

        <StatusBar style="light" backgroundColor={"red"} translucent={false}/>

      {/*DESAFIO*/}
        <View>
            <Button title={'Clique Aqui'} onPress={() => clicou()}></Button>
            <Text style={styles.textinho}>Você clicou {cliques}</Text>
            <Button title={'Remover Cliques'} onPress={() => remover()}></Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7e7e7e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinho: {
    fontSize: 30,
    color: '#fff'
  }
});

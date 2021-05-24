// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import foto from './assets/perfil.jpg';
import Card from './src/Components/Card/Card';

const App = () => {

  function RedesSocias(rede_social) {
    switch (rede_social) {
      case 'Linkedin':
        Alert.alert('Meu Linkedin','https://linkedin.com/in/nelsoneo04')
        break;
    
      case 'GitHub':
        Alert.alert('Meu GitHub','https://github.com/nelsoneo04')
        break;

      case 'FaceBook':
        Alert.alert('Meu Facebook','https://facebook.com/nelsoneo04')
        break;  
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style = {styles.cabecalhoContainer}> 
            <Image source={foto} style = {styles.fotoStyle}/>
            <Text style = {styles.nome}>NELSON H GUERRA</Text>
            <Text style = {styles.cargo}>Desenvolvedor Mobile</Text>
            <View style = {styles.redesSociais}>
                <TouchableOpacity onPress = {() => RedesSocias('GitHub')}>
                  <Icon name= 'github' style={{fontSize: 20}} />
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => RedesSocias('FaceBook')}>
                  <Icon name = 'facebook-square' style={{fontSize: 20}} />
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => RedesSocias('Linkedin')}>
                  <Icon name = 'linkedin-square' style={{fontSize: 20}} />
                </TouchableOpacity> 
            </View>
        </View>
        {/* <StatusBar style="auto" /> */}
    </View>

    <Card titulo = 'Formação Academica'/>
    <Card titulo = 'Experiencias Professional'/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
/*     backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', */
  },
  cabecalhoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 35
  },
  fotoStyle: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  cargo: {
    color: '#933939',
    marginBottom: 10
  },
  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 10
  },
});

export default App;

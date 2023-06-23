import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, Text } from '@rneui/themed'
import { LinearGradient } from 'expo-linear-gradient';
import TrackPlayer from 'react-native-track-player';


 

const { width, height } = Dimensions.get('window')
const handlePress = () => {
  TrackPlayer.setupPlayer().then(async () =>{
    await TrackPlayer.add({
      id: '1',
      url: 'stm43.conectastm.com:7790',
      title: 'Rádio 102.9 Amorim FM',
      artist: 'A mais ouvida e potente da região!',
    });
  });
  TrackPlayer.play();
} 

export default function App(){

  return(
    <LinearGradient style={styles.appBackground}colors={['#ffffff','#087FED','#0E1D51']}>
      <View style={styles.containerLogos}>
        <Image resizeMode="contain"style={styles.logosRadioRede}source={require('./assets/Logo_Radio_Amorim_102.9-removebg-preview.png')}/>
        <Image resizeMode="contain"style={styles.logosRadioRede}source={require('./assets/rede_amorim_PORTAL_1_-removebg-preview.png')}/>
      </View>
      <LinearGradient colors={['#E8D529','#087FED']} style={styles.primeiraBox}>
        <Text h1 h1Style={{
          fontSize:20,
          textAlign: 'center',
          fontWeight:'bold',
          marginHorizontal: 20,
          fontStyle: 'italic',
          textShadowColor: 'white',
          textShadowOffset: {width: 0.5, height:0.5},
          textShadowRadius: 0
        }}>
          A MAIS OUVIDA E POTENTE DA REGIÃO AGORA NO SEU CELULAR!
        </Text>
        <Text h2 h2Style={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 30,
          marginHorizontal: 20,
          fontStyle: 'italic',
          textShadowColor: 'white',
          textShadowOffset: {width: 0.9, height:0.5},
          textShadowRadius: 0,
        }}>
          CLIQUE E EMBARQUE NA PROGRAMAÇÃO DA 102.9 AMORIM FM!
        </Text>
      </LinearGradient>
      <Button title="SINTONIZE!" onPress={handlePress}titleStyle={{fontStyle: 'italic',fontWeight: 'bold', color: 'black'}} buttonStyle={styles.botaoSintonize}></Button>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({

  appBackground: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  primeiraBox: {
    justifyContent:'center',
    width: width * 0.8,
    height: height * 0.3,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black'
  },
  botaoSintonize:{
    paddingHorizontal: width * 0.139,
    paddingVertical: '15%',
    marginVertical: height * 0.1,
    backgroundColor: '#E8D529',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black'
  },
  logosRadioRede:{
    flex: 1,
    width: width * 0.3,
    marginHorizontal: 10
  },
  containerLogos:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: width * 0.1
  }, 
})
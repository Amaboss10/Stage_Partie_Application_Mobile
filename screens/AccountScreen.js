
import React, { useState } from "react";
import { Text, View, Image, StyleSheet,TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Ionicons as Icon } from '@expo/vector-icons';
import { Button } from 'native-base';
import Dialog from "react-native-dialog";

let sizee = 30;


fetch('http://localhost:3000/utilisateur')
.then(res => res. json())
.then((out) => {
console.log('Checkout this JSON! ', out);
})


const Perso = ({
    nom: "AZIZI",
    prenom: "Mohammed",
    profile:'./assets/prf.jpg',
    email: "AZIZI.mohammed@etu.unilim.fr",
    adresse: "La Borie Limoges",
    tel: "+3362552352 ",
    naiss:'01/01/1998'
});

function AccountScreen ({ navigation }) {
  const [visible, setVisible] = useState(false);
 
  const showDialog = () => {
    setVisible(true);
  };
 
  const handleCancel = () => {
    setVisible(false);
  };
 
  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };
    return (
      
        <View>
            <View >
              
              <Text style={styles.nomm} > {Perso.nom} {Perso.prenom} </Text>


                <Image
                  style={styles.prf}
                  source={require('../assets/prf.jpg')} 
                />
                  {/* source={require(Perso.profile)} /> */}

              <Image
              style={styles.logo}
              source={require('../assets/Top_Background.png')} 
              />
         
            </View>
            <View style={styles.cont}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.ico} >
                <Ionicons name='mail-open' size={sizee} color='tomato' />
              </View>
              <View style={{width: 350, height: 60 , padding:10}} >
                <Text style={{ opacity:0.5 }}>Mail </Text>
                <Text>{Perso.email}</Text>
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.ico} >
                <Ionicons name='call' size={sizee}  color='tomato' />
              </View>
              <View style={{width: 350, height: 60 , padding:10}} >
                <Text style={{ opacity:0.5 }}>Telephone </Text>
                <Text>{Perso.tel}</Text>
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.ico} >
              <Ionicons name='calendar' size={sizee} color="tomato" />
              </View>
              <View style={{width: 350, height: 60, padding:10}} >
                <Text style={{ opacity:0.5 }}>Date de naissance </Text>
                <Text>{Perso.naiss}</Text>
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.ico} >
                <Ionicons name='location-sharp' size={sizee} color='tomato' />
              </View>
              <View style={{width: 350, height: 60 , padding:10}} >
                <Text style={{ opacity:0.5 }}>Adresse </Text>
                <Text>{Perso.adresse}</Text>
              </View>
            </View>

            </View>
            <View  style={styles.button}> 

              <Button  style={styles.btn}   >
                  <Text style={{color:'white'}}
                      onPress={() => navigation.push('Edit')}  
                  > Modifier </Text>             
              </Button>

            </View>

            <View style={{paddingTop:25 , paddingLeft:370}}>
            <Icon name="log-out" style={styles.infoIcon} size={40} onPress={showDialog} />
            <Dialog.Container visible={visible}>
        <Dialog.Title>Deconnexion</Dialog.Title>
        <Dialog.Description>
          Etes-vous sur de vouloir se deconnecter ? :(
        </Dialog.Description>
        <Dialog.Button label="Annuler" onPress={handleCancel} />
        <Dialog.Button label="Se deconnecter" onPress={handleDelete} />
      </Dialog.Container>

            </View>

          </View>

    );
}

export default AccountScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    logo: {
      position: 'absolute',
      top: 0,
      left:0,
      margin:0,padding:0,
      width:420,
      height:260,
      resizeMode: 'stretch',
    },
    prf: {
      position: 'absolute',
      top: 150,
      left:250,
      margin:0,padding:0,
      width:100,
      height:100,
      zIndex: 2,
      borderRadius: 50,   
    },
    nomm : { 
      position: 'absolute',
      top: 130,
      left: 30,
      margin:0,padding:0,
      fontWeight: "bold", 
      zIndex: 2,
      color:'white',
     },
    cont : { 
      position:'absolute',
      top:350,
      paddingVertical: 8,
      paddingHorizontal: 45,
      fontSize: 30,
      fontWeight: "bold",
     },
     button : { 
      position:'absolute',
      top:700,
      left:62,
     },
     btn : { 
      alignItems: 'center',
      textAlign: 'center',
      width:300,
      height:70,
      backgroundColor:'tomato',
      borderRadius: 40,
      textAlign: 'center',
      justifyContent: 'center',
    },
    ico : {
      width: 56,
      height:56,
      padding:12,
      marginRight:30,
      borderRadius: 60,
      borderWidth:1,
      borderColor:'#DADADA',
      shadowColor: "#000",
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
  
      elevation: 24,
    },
    infoText:{
      color: '#676767',
      fontSize: 25,
      
    },
    infoIcon:{
      
      color: "#FFFFFF",
      marginRight: 5,
      
    }
  });
  




























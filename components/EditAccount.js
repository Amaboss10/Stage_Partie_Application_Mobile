import React, { Component } from 'react';
import { Text, View, Image, StyleSheet,TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'native-base';

let sizee = 30

const Perso = ({
    nom: "AZIZI",
    prenom: "Mohammed",
    profile:'./assets/prf.jpg',
    email: "AZIZI.mohammed@etu.unilim.fr",
    adresse: "La Borie Limoges",
    tel: "+3362552352 ",
    naiss:'01/01/1998'
});

function EditProScreen({navigation}) {
    return (
     <View >
      
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
         <View style={{width: 220, height: 60}} >
           <Text style={{ opacity:0.5 }}>Mail </Text>
           <TextInput
             style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
             // onChangeText={text => onChangeText(text)}
             value={Perso.email}
           />
         </View>
       </View>
 
       
 
       <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.ico} >
           <Ionicons name='call' size={sizee}  color='tomato' />
         </View>
         <View style={{width: 220, height: 60}} >
           <Text style={{ opacity:0.5 }}>Telephone </Text>
           <TextInput
             style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
             value={Perso.tel}
           />
         </View>
       </View>
 
       <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.ico} >
         <Ionicons name='calendar' size={sizee} color="tomato" />
         </View>
         <View style={{width: 220, height: 60}} >
           <Text style={{ opacity:0.5 }}>Date de naissance </Text>
           <TextInput
             style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
             value={Perso.naiss}
           />
         </View>
       </View>
 
       <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={styles.ico} >
           <Ionicons name='location-sharp' size={sizee} color='tomato' />
         </View>
         <View style={{width: 220, height: 60}} >
           <Text style={{ opacity:0.5 }}>Adresse </Text>
           <TextInput
             multiline = {true}
             numberOfLines = {3}
             style={{ height: 40,height:100, borderColor: 'gray', borderBottomWidth: 1,
             backgroundColor: "#FFF", textAlignVertical : "top" }}
             onChangeText={(text) => this.setState({text})}
             value={Perso.adresse}
           />
 
         </View>
       </View>
         
       </View>
       <View  style={styles.button}> 
         
           <Button  style={styles.btn}   >
             <Text style={{color:'white'}}
                 onPress={() => navigation.goBack('Edit')}  
             > Sauvegarder </Text>             
         </Button>
       </View>
           
       
     </View >
   );
 }
export default EditProScreen;


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
    }
  });
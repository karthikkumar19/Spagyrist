import React from 'react';
import {View,Text,StyleSheet,Image,TouchableWithoutFeedback,Linking} from 'react-native'; 
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import Headerbutton from '../../components/UI/HeaderButton';
import Icon from 'react-native-vector-icons/FontAwesome';


const  HelpScreen = props => {
    return (
       <View style={styles.screen}>
           <View style={styles.headerContainer}>
           <Image style={styles.image} source={{uri:'help1'}} />
           
           <Text style={styles.header}>Need Some Helps?</Text>
           <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Contact us</Text>
           <Text style={{marginVertical:10,marginHorizontal:50,color:'white'}}>Call us or Send a message and We'll respond you as soon as possible!</Text>
           </View>
              <TouchableWithoutFeedback onPress={() => {
                  Linking.openURL(`tel:${9372012300}`)
              }}>
                  <View style={styles.buttonContainer}>
                  <Icon name='phone' size={23} color='red' /> 
                    <Text style={styles.text}>9372012300</Text>
                  </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={()=>{
                  Linking.openURL(`mailto:contact@smmentors.com?subject=need Help!`)
                
              }}>
                  <View style={styles.buttonContainer}>
                  <Icon name='envelope' size={23} color='red' /> 
                    <Text style={styles.text}>contact@smmentors.com</Text>
                  </View>
              </TouchableWithoutFeedback>
       </View>
    )
}

export const screenOptions = navData => {
    return{
        headerTitle: 'Help',
        headerLeft : () => <HeaderButtons HeaderButtonComponent={Headerbutton}>
        <Item title='Menu' iconName={'bars'} onPress={() => {
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>,
       
    }
   
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
       alignItems:'center',
       backgroundColor:'black'
    },
    headerContainer:{
        alignItems:'center',
        marginTop:15
    },
    image:{
        width:150,
        height:150
    },
    header:{
        fontSize:22,
        fontWeight:'bold',
        color:'white'
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:30,
        width:'60%',
        padding:10,
        borderColor:'blue',
        borderWidth:1,
        borderRadius:6
    },
    text:{
        marginHorizontal:15,
        fontSize:15,
        color:'white'
    }
})

export default HelpScreen;

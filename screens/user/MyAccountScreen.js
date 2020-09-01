import React from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity,ScrollView} from 'react-native';
import Card from '../../components/UI/Card';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import Headerbutton from '../../components/UI/HeaderButton';
import {Icon} from 'react-native-elements';
import Colors from '../../Constants/Colors';

const MyAccountScreen = props => {
    return (
        <View style={styles.screen}>
            <ScrollView>
            <View style={styles.profileContainer}>
        <View style={styles.bgcolor}>
        </View>
     
        <Image style={styles.image} 
        source={{uri:'https://www.pngfind.com/pngs/m/8-86798_beard-png-transparent-background-beard-man-png-png.png'}}/>
    
      <View style={styles.cardContainer}>
      <Card style={styles.card}>
      <Text style={styles.name}>Karthik </Text>
       </Card> 
       <Card style={styles.card}>
      <Text style={styles.name}> Kumar</Text>
       </Card> 
       <Card style={styles.card}>
      <Text style={styles.name}>mkarthikkumar19@gmail.com</Text>
       </Card> 
       <Card style={styles.card}>
      <Text style={styles.name}>9790406141</Text>
       </Card> 
       <Card style={styles.card}>
      <Text style={styles.name}>19-06-2000</Text>
       </Card> 
       <Card style={styles.card}>
      <Text style={styles.name}>Madurai, Tamilnadu</Text>
       </Card> 
       {/* <Card style={styles.card}>
       <View style={styles.cardItem}>
       <Icon name="mail" type='material'  size={30} color="grey" />
    <Text style={styles.details}>{props.email}</Text>
       </View>
       </Card>  */}
      </View>
      </View>
            </ScrollView>

      <TouchableOpacity
           style={{
               borderWidth:1,
               borderColor:'rgba(0,0,0,0.2)',
               alignItems:'center',
               justifyContent:'center',
               width:70,
               position: 'absolute',                                          
               bottom: 50,                                                    
               right: 25,
               height:70,
               backgroundColor:'#fff',
               borderRadius:100,
             }}
    //          onPress={() => {
    //             editProfileHandler(userProfile[0].id)
    //    }}
    >
           <Icon name="edit" type='material'  size={30} color="#01a699" />
          </TouchableOpacity>
        </View>
      
    )
}

export const screenOptions = navData => {
    return{
        headerTitle: 'My Account',
        headerLeft : () => <HeaderButtons HeaderButtonComponent={Headerbutton}>
        <Item title='Menu' iconName={'bars'} onPress={() => {
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>,
        // headerRight: () => <HeaderButtons HeaderButtonComponent={Headerbutton}>
        //     <Item title='Cart' iconName={'md-cart'} onPress={() => {
        //         navData.navigation.navigate('Cart')
        //     }} />
        // </HeaderButtons>
    }
   
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        
    },
    profileContainer:{
        flex:1,
        alignItems:'center',
        zIndex:-1,
    },
    image:{

        width:100,
        height:100,
        borderRadius:65,
        borderWidth:2,
        borderColor:'#fff',
        position: 'absolute',                                          
        top:50,                                                    
        alignItems:'center'
    },
    bgcolor:{
        width:'100%',
        height:100,
        backgroundColor:Colors.primary
    },
    cardContainer:{
       width:'85%',
       marginVertical:50
    },
    card:{
        padding:10,
        elevation:3,
        margin:10,
        borderRadius:2
    },
    cardItem:{
        flex:1,flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    TextContainer:{
        marginTop:'20%'
    },
    name:{
        fontFamily:'roboto-bold',
        fontSize:18,
        color:'gray'
    },
    details:{
        fontSize:20,
        fontFamily:'roboto-medium',
        marginLeft:10,
        color:'grey'
    }
})



export default MyAccountScreen

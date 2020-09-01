import React from 'react';
import {View,Text,StyleSheet,TextInput,KeyboardAvoidingView,
    Keyboard,TouchableWithoutFeedback,Button} from 'react-native'; 

const  AuthScreen = props => {
    return (
       <KeyboardAvoidingView  keyboardVerticalOffset={0}
        style={styles.screen}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.authContainer}>
                <Text style={styles.header}>SPAGYRIST MENTORS LAB</Text>
                <View style={styles.secheaderContainer}>
                <Text style={styles.secondHeader}>LOGIN TO ACCESS YOUR </Text>
                 <Text style={styles.secondHeader}>VIDEO COURSES</Text>
                </View>
                <View style={styles.horizontal}>

                </View>
                <View style={styles.textContainer}>
                <TextInput id='email' label='E-Mail' 
        keyboardType='email-address'
        placeholder='user name'
        style={styles.input}
        required email autoCaptialize='none' 
        errorText='Plese enter the vaild email address'
        // onInputChange={inputChangeHandler}
        initialValue='' />

         <TextInput id='password' label='Password' 
        keyboardType='default'
        secureTextEntry
        required
        style={styles.input}
        minLength={5}
        placeholder='Password'
         autoCaptialize='none' 
        errorText='Plese enter the vaild Password'
        // onInputChange={inputChangeHandler}
        initialValue='' />
                </View>
                <View style={styles.buttonContainer}>
              <Button
              title='LOG IN'
                // title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
                color='orange'
                // onPress={() => {
                //   setIsSignup(prevState => !prevState);
                // }}
              />
        </View>
               
           </View>
            </TouchableWithoutFeedback>
          
       </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
       
        backgroundColor:'blue'
    },
    input:{
        backgroundColor:'white',
        borderRadius:4,
        paddingLeft:20,
        marginVertical:10
    },
    horizontal:{
        marginTop:10,
        borderBottomColor:'orange',
        borderBottomWidth:4,
        width:'65%'
    },
    authContainer:{
        margin:45,
       
    },
    header:{
        color:'white',
        fontSize:50
    },
    secheaderContainer:{
        marginVertical:10
    },
    secondHeader:{
        fontSize:18,
        color:'white',

    },
    textContainer:{
        marginTop:50
    },
    buttonContainer:{
        marginTop:10,
       marginHorizontal:25
    
    }
})

export default AuthScreen

import React from 'react';
import { Button,  View,TouchableWithoutFeedback,StyleSheet ,ScrollView,Keyboard} from 'react-native';
 import { Formik } from 'formik';
 import { TextInput } from 'react-native-paper';

const EditUserScreen = props => {
    return (
            <View style={styles.screen}>
              <ScrollView >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.formContainer} >
              
                <Formik
        initialValues={{ firstName: '',lastName:'',email:'',mobile:'',DateOfBirth:'',address:'' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View  >
            <TextInput
            style={styles.textInput}
            label='first name'
            mode='outlined'
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
            />
             <TextInput
            style={styles.textInput}
            label='last name'
            mode='outlined'
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
            />
             <TextInput
            style={styles.textInput}
            label='Email'
            mode='outlined'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
             <TextInput
            style={styles.textInput}
            label='Mobile'
            mode='outlined'
              onChangeText={handleChange('mobile')}
              onBlur={handleBlur('mobile')}
              value={values.mobile}
            />
             <TextInput
            style={styles.textInput}
            label='Date of Birth'
            mode='outlined'
              onChangeText={handleChange('DateOfBirth')}
              onBlur={handleBlur('DateOfBirth')}
              value={values.DateOfBirth}
            />
             <TextInput
            style={styles.textInput}
            label='address'
            mode='outlined'
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address}
            />
            <View style={{marginTop:20,marginHorizontal:100,borderRadius:2}}>
            <Button onPress={handleSubmit} title="Submit" />
            </View>
           
          </View>
        )}
      </Formik>
               
          
            </TouchableWithoutFeedback>
            </ScrollView>
            </View>
       
       
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
       width:'90%',
       marginHorizontal:'5%'
    },
    formContainer:{
        width:'100%',
        
        marginTop:40
    },
    textInput:{
       marginVertical:5
    }
})

export const screenOptions = navData => {
    return{
        headerTitle: 'Edit Profile',
        
        // headerRight: () => <HeaderButtons HeaderButtonComponent={Headerbutton}>
        //     <Item title='Cart' iconName={'md-cart'} onPress={() => {
        //         navData.navigation.navigate('Cart')
        //     }} />
        // </HeaderButtons>
    }
   
}

export default EditUserScreen;

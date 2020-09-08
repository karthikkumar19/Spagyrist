import React from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity,ScrollView} from 'react-native';
import Card from '../../components/UI/Card';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import Headerbutton from '../../components/UI/HeaderButton';
import {Icon} from 'react-native-elements';
import Colors from '../../Constants/Colors';
import {useSelector} from 'react-redux';

const MyAccountScreen = props => {
    const profileData = useSelector(state => state.user.profile)
    console.log('prop',profileData)

    const editProfileHandler = () => {
        props.navigation.navigate('Edit Profile')
    }
    return (
        <View style={styles.screen}>
            <ScrollView>
            <View style={styles.profileContainer}>
        <View style={styles.bgcolor}>
        </View>
     
        <Image style={styles.image} 
        source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAnFBMVEX///9SlOJ1qejMz89CdrVOkuJwpufQ0c5LkeOOter7/P5oouZjnuVXl+PJzMw+dLQ2b7Lz9/3n7/rt8fdGfsHk5ubBydHX5fjN3va60vKlxe+ryfDi7PrG2vTa4+9Ni9SCr+mDqtyXtdspaa+et9eavu22w9NSgLo8iuA0fMvF0uSCoMhmjcGvwtxkmtxxoNp3mcbP19/e3NeOqs+7NwNWAAAHjElEQVRoge1bbXeiPBAVIRAJQVDRWuu7VLeVuqv//789A2hXZTIJ1O1z9py9n6oluZOZm0kywVbrH/7hH/5K+CW+nzgeTSdpZ9F2hRBue9FJJ9NR/3uo/dE4BVoX0L4g/wBfpePRH/ZF/JS2r4lvkf8nffpjfvBHaVu494x31riinf4RL/jjxRW5CAIppWUxxiwL/goCcWXCYvxoC+JnIT6ppQWkFTBLfhohxHP8QPb+5OxlV0iE+RoyOD/pTh4mhHG77FNLfjah9ILbHj+E/aVT9hdIzOsYmAxKezsvX6eflOxmQ/9tQhkGMfkie2+R9+MG9dgLyKJlu/cV+mmhuybsOYoouNPm9IXv3Zquv3dB4xj4hfACU9VhYEEhw0bZKM5nnWbwjBUJkELeSbtBMiqUJ6ie+a6Y6ULuOPUYPOMuaquwoKeEx2U66uXjinujVHLCC0EDA+KcnvA9ZzdLjD+WhA9kbkCtEPhtmn6XVpqkO8IAF/qrI8KOSyqPPyFtnigVQH8dc3qY9wQ9YyO01YjQAHjAPA9MSXqLqzLalNIAGGCYCXua2D8rWz5TGgARmk0CkD5Bz1y1kHyXCgFo0IR+4pLzfodp74InwgGQB1wDCbwIkp4JsrWgsrFoC/2GpNN2iS4sTg9hQqZit62dhGNBb3V2tIZ6VABAAkKzJ+xrdxsa++nGsBTQu2LYaJMdMFfDT80AgEtLMCanHoDrAtghBZBPQmohetbtNHl14blFSvNbgatOXy1f6DZ7Xx0/5GGhzl9j7UabLzT8Cw0/OEA5BfwFLT4Am2v459rtqrtQOWAk9Dv9H/Q+Jv6h7SEQ+PIN2tEOH/jfSP43Pb/lKjTcNznozN9J/ve5votAkYOejM7XayqB9dcGPUiBL6EpuXhdEJ0I/lNk0AMTaAD8hdFBbxCpFfC2Hph0IdG98Ig87Hxi3t2qItDfdg3CD0BnwNjwmD2I9ji9v4+Mhg8KxFJQanjOnjvRHvMf0Dtmw7ckJgCDyV9i4ETOrNJ8Bt8aDh9SABI88yrHwOlGp1sR9E/rrjm9FVSz6KhGmcNxYLCn2aWTeLaBz45j3oGsCnBap8wCZN0o2r+vsrds9XMbRd1a9JasHoXGteosAyc3AWwAdHPyGs4H8OoESOvVeeaFBZ8YGCr/DFadAIu6dab5AHSYe6E2O/AvKvyajStuQon6DZFtdNMiYzME9/R+8ypjE8j7DOrXdT9jjF+gLQJWwCv8un3rNTUwysDNr91ypJ2FK2T+5XfwA0/QmY56tx34vdE0DcxNaMrPdmKsPgH3xmJnZkGV36Qd59objZcONxkJq6zgBvrfGVVRex0DH8hKsw9dI2aZ3iRMtTdF7KPS6KBpw4V5CbknNDFgh0qbJc2vPXjeQnMMZctKixXZQlv3uEebHA5fVRpkFD+z6t5gxOgd7Sd/Vmnwi+JXlnzVoIrBFv9VeT4hnq8Z/BJUJYQlVX5iArAm96gvRH8HhP+ktBfZrZhAvaPiJ+QAkykf3zW7yB4ra6GsKr9WK1RmYN7sXYJY6VBpI48fVQJgRMWMgq+qJ7DDEXk82SjsbRh+tQD4pio/MHeoCACrcXN1g46CXw5Rh3qKADyanx089PGjIgU/mp9nWPhBACF+Bng0fxBi4QcBePga+GB+vvIU8+kYfgt/iLu/1ep76Cbksfxs6anqZ749RFtUN2tmwLeUQyz5lUi8JRaBH5tG9BusFs2XHq6+AiGag+ZduuiN4w0tRsphSLRJ0Ckw7xI1VyV9hPGD+Inht1q2jeUAx1ljKyaFbI0WpAJbHf0cif2KOcBxovc6r9P134EeG/6rTQ4fpgAqwQEYsM1Ml2E/20ZoQQzEZ2s6SUIPOz2BAd313kwFb/t1F6Vn0lOk3it43is2bed5pWvtbHSHsN7GydnRciB79fCV7xp+6KEbkfmgWxY9s5my/j/L9kUptIsW5PjGCw1CCBFAs1BZ88xN2O5P2azXj89vXvt+3O/NstP+XIdV1EIh+Hrv57BtT1EMvNQ8wYZ15Gz3+5859vutA5/P3KpKLHM9zdy7ioCtOsFflV2719AWYpm0bRPvlxGwh+oSwl3l16wKzOTQNvN+aYA3JN87nA8A18QAqgzLgqFh8EscwQCT120Ny78wek+560ABGjQywAg5vaH2LvBtgFujJkqAu3lnNc9Qvh3iS0F9ekj6YV36swGb2oXlezC2aUR/NuCVeq/SZPDytSE9wAMDIAZfcAH4Huj1i44CkIjABR9NXcADGHyNtIMYAML17FWjIHC5gra2ZsOjQS4CSAVLspqHgbFlPumbhv7KBaFdWGBUVv8cOy/Yv+T7Txd4YRmFwFCJjAersGBXHTRrIrFLC7ID+Z71mVwesiLu4dcifw3/bIE33BwkU9oA/5GHzdA7sz/0N0BJmFsAJtivqwO7u3Mr7+LYYZXZBbkdPiLw9xYUPihs8IbZann4CGRBK4OPw3KVwbi98oEHev4G8dEOf9twYbv7FNrHR/706RZ+crQvbkAA/zk+NuwI+knuhvDWiuKLY/JNv0Fs+f0kOXolbZ4gj0nS/x9+hvkPfz3+Aw8ehdDwIdMsAAAAAElFTkSuQmCC'}}/>
    
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
             onPress={
                editProfileHandler
       }
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
        backgroundColor:'grey'
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

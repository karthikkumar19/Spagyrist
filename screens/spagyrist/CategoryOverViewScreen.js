import React from 'react';
import {View,Text,StyleSheet,TouchableNativeFeedback,ScrollView} from 'react-native'; 
import Headerbutton from '../../components/UI/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CategoryList from '../../components/spagyrist/CategoryList';
// import Construction from '../../assets/images/construction.jpg';
// import Industrial from '../../assets/images/industrial.jpg';
// import Cnc from '../../assets/images/cnc.jpg';
// import Oilgas from '../../assets/images/oilgas.jpg';
// import Painting from '../../assets/images/painting.jpg';
// import Softskill from '../../assets/images/softskill.jpg';
// import Welding from '../../assets/images/welding.jpg';


const  CategoryOverViewScreen = props => {

    const selectCategoryHandler = (category) => {
        props.navigation.navigate('CategoryName',{
           
            categoryName:category
        })
    }

    return (      
 <ScrollView >
      <View style={styles.screen}>
        <CategoryList onSelect={() => {selectCategoryHandler("Construction")}} image={'construction'} title="Construction" />
        <CategoryList onSelect={() => {selectCategoryHandler("Industrial Safety")}} image={'industrial'}  title="Industrial Safety" />
        <CategoryList onSelect={() => {selectCategoryHandler("Oil &amp; Gas Industry")}} image={'oilgas'}  title="Oil&Gas Industry" />
        <CategoryList onSelect={() => {selectCategoryHandler("Welding")}} image={'welding'}  title="Welding" />
        <CategoryList onSelect={() => {selectCategoryHandler("Cnc")}} image={'cnc'}  title="CNC" />
        <CategoryList onSelect={() => {selectCategoryHandler("Painting")}} image={'painting'}  title="Painting" />
        <CategoryList onSelect={() => {selectCategoryHandler("Soft Skill")}} image={'softskill'} title="Soft Skill" />


        </View>
            </ScrollView>
      
           
    )
}

export const screenOptions = navData => {
    return{
        headerTitle: 'Categories',
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
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'black'
    }
})

export default CategoryOverViewScreen;

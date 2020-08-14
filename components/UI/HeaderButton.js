import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

import Colors from '../../Constants/Colors';

const Headerbutton = props => {
    return(
        <HeaderButton {...props} IconComponent={Icon} iconSize={23}
        color={Platform.OS === 'android' ? 'white' : Colors.primary} />
    )
};

export default Headerbutton;
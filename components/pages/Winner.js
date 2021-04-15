import React, {Component} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

class Winner extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return(
            <View>
                <Text>Ganhador</Text>
            </View>
        )
    }
}

export default Winner;
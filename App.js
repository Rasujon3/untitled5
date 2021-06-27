import React, {Component} from 'react';
import {Text, View} from 'react-native';

class App extends Component {

    constructor() {
        super();
        this.state={
            MyDeviceInfo:"",
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <View>
                <Text>{this.state.MyDeviceInfo}</Text>
            </View>
        );
    }
}

export default App;


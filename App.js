import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';

class App extends Component {

    componentDidMount() {
        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            .then((result) => {

            });
    }

    render() {
        return (
            <View>
                <Text>React Native Permission</Text>
            </View>
        );
    }
}

export default App;

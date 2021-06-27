import React, {Component} from 'react';
import {Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';

class App extends Component {

    constructor() {
        super();
        this.state = {
            MyDeviceInfo: '',
            apiLevel:'',
            version:'',
        };
    }

    componentDidMount() {
        let DeviceID = DeviceInfo.getDeviceId();
        this.setState({MyDeviceInfo: DeviceID});

        let version = DeviceInfo.getVersion();
        this.setState({version: version});

        DeviceInfo.getApiLevel().then((apiLevel) => {
            this.setState({apiLevel: apiLevel});
        });
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.MyDeviceInfo}</Text>
                <Text style={{fontSize: 40}}>{this.state.apiLevel}</Text>
                <Text style={{fontSize: 40}}>{this.state.version}</Text>
            </View>
        );
    }
}

export default App;


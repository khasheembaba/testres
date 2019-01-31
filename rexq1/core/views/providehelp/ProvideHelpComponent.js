import React,{Component} from 'react';
import {AppRegistry, View,Text,Image,ImageBackground } from 'react-native';
import { Button } from 'react-native';

export default class ProvideHelpComponent extends Component {
    render() {
      return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} >
              <Text>Provide Help</Text>
               <Button title="Back to Home"  color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                     onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
      </View>
      );
    }
  }
AppRegistry.registerComponent('ProvideHelpComponent', () => ProvideHelpComponent) 
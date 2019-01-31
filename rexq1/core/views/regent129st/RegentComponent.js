import React,{Component} from 'react';
import {AppRegistry, View,Text,Image,ImageBackground } from 'react-native';
import { Button } from 'react-native';

export default class RegentComponent extends Component {
    gotoGetHelp(){
      this.props.navigation.navigate('GetHelp')
    }

    render() {
      return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} >
              <Text>RegentComponent</Text>
               <Button title="Back to Home"  color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                     onPress={() => this.gotoGetHelp()}/>
            </View>
      </View>
      );
    }
  }
AppRegistry.registerComponent('RegentComponent', () => RegentComponent) 
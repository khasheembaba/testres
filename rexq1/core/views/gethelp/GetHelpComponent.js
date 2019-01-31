import React,{Component} from 'react';
import {AppRegistry, View,Text,Image,ImageBackground } from 'react-native';
import { Button } from 'react-native';

export default class GetHelpComponent extends Component {
    gotoHowCanHelp(){
      this.props.navigation.navigate('HowCanHelp')
    }
    gotoRegent129(){
      this.props.navigation.navigate('Regent129St')
    }
    gotoHome(){
      this.props.navigation.navigate('Home')
    }
    render() {
      return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} >
              <Text>Get Help</Text>
              <Button title="129 Regent St"  color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                     onPress={() => this.gotoRegent129()}/>

                         <Button title="How Can we Help"  color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                     onPress={() => this.gotoHowCanHelp()}/>

               <Button title="Back to Home"  color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                     onPress={() => this.gotoHome()}/>
            </View>
      </View>
      );
    }
  }
AppRegistry.registerComponent('GetHelpComponent', () => GetHelpComponent) 
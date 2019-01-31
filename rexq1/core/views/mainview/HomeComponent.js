import React,{Component} from 'react';
import {AppRegistry, View,Text,Image,ImageBackground } from 'react-native';
import { Button } from 'react-native';

export default class HomeComponent extends Component {
  gotoGetHelp(){
    this.props.navigation.navigate('GetHelp');
  }
  gotoProvideHelp(){
    this.props.navigation.navigate('ProvideHelp');
  }

    render() {
      return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} >
               <ImageBackground
          resizeMode={'stretch'}
          style={{flex: 1}}
          source={require('./img/home.jpg')} />
                <View >
                    <Button     title="Get Help"  color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() => this.gotoGetHelp()}/>
                    <Button     title="Provide Help"  color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                     onPress={() => this.gotoProvideHelp()}/>
                </View>
                
            </View>
      </View>
      );
    }
  }
AppRegistry.registerComponent('HomeComponent', () => HomeComponent) 
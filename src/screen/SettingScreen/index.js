import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,
    Button,TouchableHighlight,TouchableOpacity,View, StyleSheet,
    ScrollView,Image,ListView,TextInput,Switch} from 'react-native';
import styles from './styles'
import {RkButton} from 'react-native-ui-kitten'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SideMenu from 'react-native-side-menu';
import SideMenuScreen from '../SideMenuScreen';
import * as Animatable from 'react-native-animatable';
import loginback from '../../images/body-bg.png'
import menu from '../../images/menu.png'

import user from '../../images/user.png'
import openlock from '../../images/open-lock.png'
import dollarsymbol from '../../images/dollar-symbol.png'
import musicplayersettings from '../../images/music-player-settings.png'
import share from '../../images/share.png'
import creditcard from '../../images/credit-card.png'

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const { state: { params } } = navigation;

        return ({
            gesturesEnabled: false,
            headerLeft: <TouchableHighlight onPress={params ? params.onOpenSideMenu : () => {}}>
                            <Image style={{height:30,width:30}} source={menu} />
                        </TouchableHighlight>,
            headerRight: <TouchableOpacity onPress={() => {}}>
                            <Text style={styles.logoutText}>Log Out</Text>
                        </TouchableOpacity>, 
            headerTitleStyle: {
            alignItems: 'center'
            },
            headerStyle: {
                backgroundColor: 'white',
                height: 70,
                paddingLeft: 10,
                paddingRight: 10,
                alignSelf:'auto'
            }
        });
    };

    constructor(){
        super();
        this.state = {
            isOpen:false,
            switch1Value: false,
            switch3Value: true,
            switch4Value: true,
            switch5Value: true,
            switch2Value: true,
        };        
    }

    componentWillMount() {
        this.props.navigation.setParams({
            onOpenSideMenu: () => this.props.navigation.goBack()

        });        
    }

    toggleSwitch1(){
       
    }
    toggleSwitch2(){
        
    }
    toggleSwitch3(){
        
    }
    toggleSwitch4(){
        
    }
    toggleSwitch15(){
       
    }

    render() {
        return (
                <View style={{flex:1}}>
                    <Image
                        source={loginback}
                        style={{
                            width:'100%',
                            height:'100%',
                            position:'absolute'
                        }}
                    />
                    <View style={{flex:1,paddingVertical: 70,justifyContent:'space-between'}}>        
                        <Text style={{
                            fontSize:28,
                            fontWeight:'700',
                            color:'white',
                            backgroundColor:'transparent',
                            textAlign:'center'}}>Setting</Text>   
                                                                   
                            <View style={{flexDirection:'row',paddingHorizontal: 40,justifyContent:'space-between'}}>
                                <Text style={{backgroundColor:'transparent',color:'white',fontSize:20}}>PIN</Text>
                                <Switch onValueChange = {this.toggleSwitch1}
                                        value = {this.state.switch1Value}/> 
                            </View>  
                            <View style={{flexDirection:'row',paddingHorizontal: 40,justifyContent:'space-between'}}>
                                <Text style={{backgroundColor:'transparent',color:'white',fontSize:20}}>Enroll Fingerprint</Text>
                                <Switch onValueChange = {this.toggleSwitch2}
                                        value = {this.state.switch2Value}/> 
                            </View>  
                            <View style={{flexDirection:'row',paddingHorizontal: 40,justifyContent:'space-between'}}>
                                <Text style={{backgroundColor:'transparent',color:'white',fontSize:20}}>Enroll Wipay card</Text>
                                <Switch onValueChange = {this.toggleSwitch3}
                                        value = {this.state.switch3Value}/> 
                            </View>  
                            <View style={{flexDirection:'row',paddingHorizontal: 40,justifyContent:'space-between'}}>
                                <Text style={{backgroundColor:'transparent',color:'white',fontSize:20}}>Enroll facial recognition</Text>
                                <Switch onValueChange = {this.toggleSwitch4}
                                        value = {this.state.switch4Value}/> 
                            </View>                    
                            <View style={{flexDirection:'row',paddingHorizontal: 40,justifyContent:'space-between'}}>
                                <Text style={{backgroundColor:'transparent',color:'white',fontSize:20}}>Saved Documents</Text>
                                <Switch onValueChange = {this.toggleSwitch5}
                                        value = {this.state.switch5Value}/> 
                            </View>  

                    </View>
                </View>
        );
    }
}

export default HomeScreen;
import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Button,TouchableHighlight ,TouchableOpacity,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
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
import setting from '../../images/setting.png'

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const { state: { params } } = navigation;

        return ({
            gesturesEnabled: false,
            headerLeft: <TouchableOpacity onPress={params ? params.onOpenSideMenu : () => {}}>
                            <Image style={{height:30,width:30}} source={menu} />
                        </TouchableOpacity>,
                       
            headerTitleStyle: {
            alignItems: 'center'
            },
            headerRight: <TouchableHighlight onPress={params ? params.onOpenSetting : () => {}}>
                            <Image style={{height:30,width:30}} source={setting} />
                        </TouchableHighlight>,
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
            button1:true,
            button2:true,
            button3:true,
            button4:true,
            button5:true,
            button6:true,
        };        
    }

    componentWillMount() {
        this.props.navigation.setParams({
            onOpenSideMenu: () => this.props.navigation.goBack(),
            onOpenSetting: () => this.props.navigation.navigate('SettingScreen'),
        });        
    }

    gobutton(item){
        if(item==1){
            this.setState({
                button1: this.state.button1,
                button2: false,
                button3: false,
                button4: false,
                button5: false,
                button6: false
               })
        }else if(item==2){
            this.setState({
                button1: false,
                button2: !this.state.button2,
                button3: false,
                button4: false,
                button5: false,
                button6: false
               })
        }else if(item==3){
            this.setState({
                button1: false,
                button2: false,
                button3: !this.state.button3,
                button4: false,
                button5: false,
                button6: false
               })
        }else if(item==4){
            this.setState({
                button1: false,
                button2: false,
                button3: false,
                button4: !this.state.button4,
                button5: false,
                button6: false
               })
        }else if(item==5){
            this.setState({
                button1: true,
                button2: false,
                button3: false,
                button4: false,
                button6: !this.state.button5,
                button6: false
               })
        }else if(item==6){
            this.setState({
                button1: true,
                button2: false,
                button3: false,
                button4: false,
                button5: false,
                button6: !this.state.button6,
               })
        }
       
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
                    <View style={styles.container}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:2,backgroundColor:'transparent'}}>
                            <View style={{flexDirection:'row',alignSelf:'center'}}>
                                <Text style={{fontSize:28,fontWeight:'400',color:'white'}}>Welcome to </Text>
                                <Text style={{fontSize:28,fontWeight:'700',color:'white'}}>
                                    WIPAY
                                </Text>
                            </View>
                            <Text style={{fontSize:14,fontWeight:'400',color:'white',alignSelf:'center'}}>One secure system for every payment</Text>
                        </View>
                        <View style={{flex:3,borderColor:'white',borderTopWidth:1,}}>
                            <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                                 <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('QrScreen')}
                                    style={{alignItems:'center',justifyContent:'center',flex:1,borderColor:'white',borderBottomWidth:1,borderRightWidth:1}}>
                                    <View>
                                        <Image source={user} style={{height:40,alignSelf:'center',width:40}} />
                                        <Text style={{color:'white',marginTop:6,}}>Pay Anyone</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('WipayScreen')}
                                    style={{flexDirection:'column',justifyContent:'center',flex:1,borderColor:'white',borderBottomWidth:1,borderRightWidth:1}}>
                                    <View>
                                        <Image source={openlock} style={{height:40,alignSelf:'center',width:40}} />
                                        <Text style={{textAlign:'center',color:'white',marginTop:6}}>My Wallet</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('DepositScreen')}
                                    style={{flexDirection:'column',justifyContent:'center',flex:1,borderColor:'white',borderBottomWidth:1,borderRightWidth:1}}>
                                    <View>
                                        <Image source={dollarsymbol} style={{height:40,alignSelf:'center',width:40}} />
                                        <Text style={{alignSelf:'center',color:'white',marginTop:6}}>Deposit</Text>
                                    </View>
                                </TouchableOpacity>
                                 <TouchableOpacity 
                                     onPress={() => this.props.navigation.navigate('InvoiceScreen')}
                                    style={{flexDirection:'column',justifyContent:'center',flex:1,borderColor:'white',borderBottomWidth:1,borderRightWidth:1}}>
                                    <View>
                                        <Image source={musicplayersettings} style={{height:40,alignSelf:'center',width:40}} />
                                        <Text style={{alignSelf:'center',color:'white',marginTop:6}}>Invoice</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
                                 <TouchableOpacity 
                                     onPress={() => this.props.navigation.navigate('ProfileScreen')}
                                    style={{flexDirection:'column',justifyContent:'center',flex:1,borderColor:'white',borderBottomWidth:1,borderRightWidth:1}}>
                                    <View>
                                        <Image source={share} style={{height:40,alignSelf:'center',width:40}} />
                                        <Text style={{alignSelf:'center',color:'white',marginTop:6}}>Profile</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableHighlight  underlayColor='#6ea1fa'
                                    onPress={() => this.props.navigation.navigate('GetCashScreen')}
                                    style={{flexDirection:'column',justifyContent:'center',flex:1,borderColor:'white',borderBottomWidth:1,borderRightWidth:1}}>
                                    <View>
                                        <Image source={creditcard} style={{height:40,alignSelf:'center',width:40}} />
                                        <Text style={{alignSelf:'center',color:'white',marginTop:6}}>Wipay card</Text>
                                    </View>
                                </TouchableHighlight>
                                 <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('GetCashScreen')}
                                    style={{flexDirection:'column',justifyContent:'center',flex:1,borderColor:'white',borderBottomWidth:1,borderRightWidth:1}}>
                                    <View>
                                        <Image source={creditcard} style={{height:40,alignSelf:'center',width:40}} />
                                        <Text style={{alignSelf:'center',color:'white',marginTop:6}}>Withdrawal</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('GetCashScreen')}
                                    style={{flexDirection:'column',justifyContent:'center',flex:1,borderColor:'white',borderBottomWidth:1,borderRightWidth:1}}>
                                    <View>
                                        <Image source={creditcard} style={{height:40,alignSelf:'center',width:40}} />
                                        <Text style={{alignSelf:'center',color:'white',marginTop:6}}>Gift Card</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex:2}}></View>
                    </View>
                </View>
        );
    }
}

export default HomeScreen;
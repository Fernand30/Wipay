import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Button,Dimensions,TouchableHighlight ,TouchableOpacity,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
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
                            <Image style={styles.headerImage} source={menu} />
                        </TouchableOpacity>,
            headerTitle: <Text style={styles.headerTitle}>Menu</Text>,           
            headerTitleStyle: {
                alignItems: 'center'
            },
            headerRight: <TouchableHighlight onPress={params ? params.onOpenSetting : () => {}}>
                            <Image style={styles.headerImage} source={setting} />
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
    }

    componentWillMount() {
        this.props.navigation.setParams({
            onOpenSideMenu: () => this.props.navigation.goBack(),
            onOpenSetting: () => this.props.navigation.navigate('SettingScreen'),
        });        
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
                                <Text style={styles.welcome}>Welcome to </Text>
                                <Text style={styles.wipay}>
                                    WIPAY
                                </Text>
                            </View>
                            <Text style={styles.oneText}>One secure system for every payment</Text>
                        </View>
                        <View style={{flex:3,borderColor:'white',borderTopWidth:1,}}>
                            <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                                 <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('QrScreen')}
                                    style={styles.layout1}>
                                    <View>
                                        <Image source={user} style={styles.eachImage} />
                                        <Text style={styles.eachText}>Pay Anyone</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('WipayScreen')}
                                    style={styles.layout2}>
                                    <View>
                                        <Image source={openlock} style={styles.eachImage} />
                                        <Text style={styles.eachText}>My Wallet</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('DepositScreen')}
                                    style={styles.layout3}>
                                    <View>
                                        <Image source={dollarsymbol} style={styles.eachImage} />
                                        <Text style={styles.eachText}>Deposit</Text>
                                    </View>
                                </TouchableOpacity>
                                 <TouchableOpacity 
                                     onPress={() => this.props.navigation.navigate('InvoiceScreen')}
                                    style={styles.layout4}>
                                    <View>
                                        <Image source={musicplayersettings} style={styles.eachImage} />
                                        <Text style={styles.eachText}>Invoice</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
                                 <TouchableOpacity 
                                     onPress={() => this.props.navigation.navigate('ProfileScreen')}
                                    style={{flexDirection:'column',justifyContent:'center',flex:1,borderColor:'white',borderBottomWidth:1,borderRightWidth:1}}>
                                    <View>
                                        <Image source={share} style={styles.eachImage} />
                                        <Text style={styles.eachText}>Profile</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableHighlight  underlayColor='#6ea1fa'
                                    onPress={() => this.props.navigation.navigate('GetCashScreen')}
                                    style={{flexDirection:'column',justifyContent:'center',flex:1,borderColor:'white',borderBottomWidth:1,borderRightWidth:1}}>
                                    <View>
                                        <Image source={creditcard} style={styles.eachImage} />
                                        <Text style={styles.eachText}>Wipay card</Text>
                                    </View>
                                </TouchableHighlight>
                                 <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('GetCashScreen')}
                                    style={{flexDirection:'column',justifyContent:'center',flex:1,borderColor:'white',borderBottomWidth:1,borderRightWidth:1}}>
                                    <View>
                                        <Image source={creditcard} style={styles.eachImage} />
                                        <Text style={styles.eachText}>Withdrawal</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('GetCashScreen')}
                                    style={{flexDirection:'column',justifyContent:'center',flex:1,borderColor:'white',borderBottomWidth:1,borderRightWidth:1}}>
                                    <View>
                                        <Image source={creditcard} style={styles.eachImage} />
                                        <Text style={styles.eachText}>Gift Card</Text>
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
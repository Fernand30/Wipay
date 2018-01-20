import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Button,TouchableOpacity,TouchableHighlight,Dimensions,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
import styles from './styles'
import {RkButton} from 'react-native-ui-kitten'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SideMenu from 'react-native-side-menu';
import SideMenuScreen from '../SideMenuScreen';
import * as Animatable from 'react-native-animatable';
import loginback from '../../images/body-bg.png'
import menu from '../../images/menu.png'
import setting from '../../images/setting.png'
import shape from '../../images/shape.png'

var {height, width} = Dimensions.get('window');

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const { state: { params } } = navigation;

        return ({
            gesturesEnabled: false,
            headerLeft: <TouchableOpacity onPress={params ? params.onOpenSideMenu : () => {}}>
                            <Image style={styles.headerImage} source={menu} />
                        </TouchableOpacity>,
            headerTitle: <Text style={styles.headerTitle}></Text>,           
            headerTitleStyle: {
                alignItems: 'center'
            },
            headerRight: <TouchableOpacity onPress={params ? params.onOpenSetting : () => {}}>
                            <Image style={styles.headerImage} source={setting} />
                        </TouchableOpacity>,
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
            isOpen:false
        };        
    }

    componentWillMount() {
        this.props.navigation.setParams({
            onOpenSideMenu: () => this.props.navigation.navigate('SideMenuScreen'),
            onOpenSetting: () => this.props.navigation.navigate('SettingScreen'),
        });        
    }



    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    onMenuItemSelected = item =>{
        this.setState({
            selectedItem: item,
        });
        const { navigate } = this.props.navigation;
        this.props.navigation.navigate(item);
    }

    render() {
        const menu = <SideMenuScreen
                            navigation = {this.props.navigation}
                            onItemSelected={this.onMenuItemSelected} />;
            
        return (

                <View style={{flex:1}}>
                    <Image
                        source={loginback}
                        style={{
                            width:'100%',
                            height:'100%',
                            position:'absolute',
                        }}
                    />
                    <View style={styles.container}>
                        <View style={{flex:5}}>
                            <Text style={styles.wipay}>WIPAY</Text>
                            <Text style={styles.login}>Account Balance</Text>
                            <Text style={styles.totalText}>$2500TT</Text>
                            <Text style={styles.forgot}>KYC Level 1</Text>
                            <Image
                                source={shape}
                                style={styles.shapeImage}
                            />
                        </View>
                        <View style={{flex:7,backgroundColor:'white'}}>
                            <View style={styles.mainView}>
                                <RkButton style={[styles.loginButton,{backgroundColor:'rgb(0,198,250)'}]} onPress={() => {}}>
                                    <Text style={styles.buttonText}>Request Payment</Text>
                                </RkButton>
                                <RkButton style={[styles.loginButton,{backgroundColor:'rgb(0,238,107)'}]} onPress={() => {}}>
                                    <Text style={styles.buttonText}>Peer-To-Peer</Text>
                                </RkButton>
                            </View>
                            <View style={{flex:4,paddingTop:10}}>
                                <View style={styles.paddingLayout}>
                                    <Text style={styles.eachText}>Date</Text>
                                    <Text style={styles.eachText}>Detail</Text>
                                    <Text style={styles.eachText}>Amount</Text>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.rowView}>
                                    <Text style={styles.eachText}>2017-12-03{'\n'}13:36:43</Text>
                                    <Text style={styles.eachText}>Payment from Wicoins{'\n'}Syst(WiCoins)</Text>
                                    <Text style={styles.eachText}>$3.40TT</Text>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.rowView}>
                                    <Text style={styles.eachText}>2017-12-03{'\n'}13:34:49</Text>
                                    <Text style={styles.eachText}>Payment to Wicoins{'\n'}Syst()</Text>
                                    <Text style={styles.eachText}>$1.00TT</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
        );
    }
}

export default HomeScreen;
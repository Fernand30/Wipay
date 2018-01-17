import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Button,TouchableHighlight,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
import styles from './styles'
import {RkButton} from 'react-native-ui-kitten'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SideMenu from 'react-native-side-menu';
import SideMenuScreen from '../SideMenuScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FooterScreen from '../Footer'
import loginback from '../../images/body-bg.png'
import menu from '../../images/menu.png'

class DepositScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const { state: { params } } = navigation;

        return ({
            gesturesEnabled: false,
            headerTitle: <Text style={{color:'rgb(0,163,240)',fontSize:35,alignSelf:'center',fontWeight:'300'}}>WiCoin</Text>,
            headerLeft: <TouchableHighlight onPress={params ? params.onOpenSideMenu : () => {}}>
                            <Image style={{height:30,width:30}} source={menu} />
                        </TouchableHighlight>,
            headerTitleStyle: {
            alignCenter: 'center'
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
            activeWindow:"0"
        };        
    }

    componentWillMount() {
        this.props.navigation.setParams({
            onOpenSideMenu: () => this.props.navigation.navigate('SideMenuScreen'),
            onOpenSetting: () => this.props.navigation.navigate('SettingScreen'),
        });        
    }

    handleNavigation(){
        var index = parseInt(this.state.activeWindow);
        if(index == 3){
            index = 0;
        }else{
            index = index + 1;
        }
        index = index.toString();
        this.setState({activeWindow: index});        
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
                            nItemSelected={this.onMenuItemSelected} />;
            
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
                    <View style={{
                                    flex:3,
                                    justifyContent:'space-between',
                                    flexDirection:'row',
                                    paddingRight:10,
                                    paddingLeft:10
                                }}>
                        <View/>
                        {
                            this.state.activeWindow == "0"
                            ?
                            <Text style={styles.wipay}>Buy</Text>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "1"
                            ?
                            <Text style={styles.wipay}>Sell</Text>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "2"
                            ?
                            <Text style={styles.wipay}>Transfer</Text>
                            :
                            null
                        }
                        
                        <View/>
                    </View>
                    <View style={{flex:5,backgroundColor:'white'}}>
                        <View style={{
                            flexDirection:'row',
                        }}>
                            <RkButton style={this.state.activeWindow == "0" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "0" })}>
                                <Text style={{fontSize:12,color:'white',fontWeight:'500'}}>Buy</Text>
                            </RkButton>
                            <RkButton style={this.state.activeWindow == "1" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "1" })}>
                                <Text style={{fontSize:12,color:'white',fontWeight:'500'}}>Sell</Text>
                            </RkButton>
                            <RkButton style={this.state.activeWindow == "2" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "2" })}>
                                <Text style={{fontSize:12,color:'white',fontWeight:'500'}}>Transfer</Text>
                            </RkButton>
                            
                        </View>
                        <KeyboardAwareScrollView
                    contentContainerStyle={{flex:1}}
                     resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={false}   extraScrollHeight={260} >
                        {
                            this.state.activeWindow == "0"
                            ?
                            <View style={{flex:1,paddingTop:5}}>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I TTD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I TTD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I TTD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <Text style={styles.amountsell}>Enter WiCoin Amount to Sell</Text>
                                <Text style={styles.wicon}>Wicoins</Text>
                                <TextInput underlineColorAndroid='transparent' placeholder="WiCoin Amount" style={styles.username}></TextInput>
                                <Text style={styles.wicon}>TDD</Text>
                                <TextInput underlineColorAndroid='transparent' placeholder="TDD Amount" style={styles.username}></TextInput>
                                <View style={{marginTop:5}}>
                                    <RkButton style={styles.loginButton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                        <Text style={{color:'rgb(0,168,220)',fontSize:25,fontWeight:'300'}}>Buy</Text>
                                    </RkButton>
                                </View>
                            </View>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "1"
                            ?
                            <View style={{flex:1,paddingTop:5}}>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I TTD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I TTD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I TTD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <Text style={styles.amountsell}>Enter WiCoin Amount to Sell</Text>
                                <Text style={styles.wicon}>Wicoins</Text>
                                <TextInput underlineColorAndroid='transparent' placeholder="WiCoin Amount" style={styles.username}></TextInput>
                                <Text style={styles.wicon}>TDD</Text>
                                <TextInput underlineColorAndroid='transparent' placeholder="TDD Amount" style={styles.username}></TextInput>
                                <View style={{marginTop:5}}>
                                    <RkButton style={styles.loginButton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                        <Text style={{color:'rgb(0,168,220)',fontSize:25,fontWeight:'300'}}>Sell</Text>
                                    </RkButton>
                                </View>
                            </View>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "2"
                            ?
                            <View style={{flex:1,paddingTop:5}}>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I TTD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I TTD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I TTD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <Text style={styles.amountsell}>Enter WiCoin Amount to Sell</Text>
                                <Text style={styles.wicon}>Wicoins</Text>
                                <TextInput underlineColorAndroid='transparent' placeholder="WiCoin Amount" style={styles.username}></TextInput>
                                <Text style={styles.wicon}>TDD</Text>
                                <TextInput underlineColorAndroid='transparent' placeholder="TDD Amount" style={styles.username}></TextInput>
                                <View style={{marginTop:5}}>
                                    <RkButton style={styles.loginButton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                        <Text style={{color:'rgb(0,168,220)',fontSize:25,fontWeight:'300'}}>Transter</Text>
                                    </RkButton>
                                </View>
                            </View>
                            :
                            null
                        }
                        </KeyboardAwareScrollView>
                    </View>                        
                </View>
                
                <View style={{}}>
                    <FooterScreen navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

export default DepositScreen;
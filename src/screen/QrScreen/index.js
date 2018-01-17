import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Linking,Alert,ActivityIndicator,Button,
    TouchableHighlight,View, StyleSheet,ScrollView,Image,ListView,TextInput,TouchableOpacity,NavigatorIOS,} from 'react-native';
import styles from './styles'
import {RkButton} from 'react-native-ui-kitten'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SideMenu from 'react-native-side-menu';
import SideMenuScreen from '../SideMenuScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FooterScreen from '../Footer'
import loginback from '../../images/body-bg.png'
import menu from '../../images/menu.png'
import qrcode from '../../images/qrcode.png'
import setting from '../../images/setting.png'
import QRCodeScanner from 'react-native-qrcode-scanner';

class DepositScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const { state: { params } } = navigation;

        return ({
            gesturesEnabled: false,
            headerTitle: <Text style={{color:'rgb(0,163,240)',fontSize:35,alignSelf:'center',fontWeight:'300'}}>Invoice</Text>,
            headerLeft: <TouchableHighlight onPress={params ? params.onOpenSideMenu : () => {}}>
                            <Image style={{height:30,width:30}} source={menu} />
                        </TouchableHighlight>,
            headerTitleStyle: {
            alignCenter: 'center'
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

    onSuccess(e) {
        Linking.openURL(e.data).catch(err => console.error('An error occured', err));
        this.forceUpdate();
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
                <KeyboardAwareScrollView
                    contentContainerStyle={{flex:1}}
                     resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={false}>
                <View style={styles.container}>
                    <View style={{
                                    flex:2.5,
                                    justifyContent:'space-between',
                                    flexDirection:'row',
                                    paddingRight:10,
                                    paddingLeft:10
                                }}>
                        <View/>
                        <Text style={styles.wipay}>Create Invoice</Text>
                        <View/>
                    </View>
                    <View style={{flex:5,backgroundColor:'white'}}>
                        <View style={{
                            flexDirection:'row',
                        }}>
                            <View style={styles.labelButton}>
                            </View>
                        </View>
                        <View style={{flex:1,paddingBottom:60,alignSelf:'center',alignItems:'center'}}>
                            <QRCodeScanner
                                onRead={this.onSuccess.bind(this)}
                                fadeIn={ false}
                                containerStyle={{alignSelf:'center', paddingHorizontal:30}}
                                topContent={(
                                  <Text style={styles.centerText}>
                                    Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                                  </Text>
                                )}
                                bottomContent={(
                                  <TouchableOpacity style={styles.buttonTouchable}>
                                    <Text style={styles.buttonText}>OK. Got it!</Text>
                                  </TouchableOpacity>
                                )}
                              />
                        </View>
                    </View>                        
                </View>
                </KeyboardAwareScrollView>
                <View style={{}}>
                    <FooterScreen navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

export default DepositScreen;
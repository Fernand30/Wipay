import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Dimensions,Button,TouchableOpacity,TouchableHighlight,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
import styles from './styles'
import {RkButton} from 'react-native-ui-kitten'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SideMenu from 'react-native-side-menu';
import SideMenuScreen from '../SideMenuScreen';
//import Icon from 'react-native-vector-icons/Ionicons';
import FooterScreen from '../Footer'
import loginback from '../../images/body-bg.png'
import menu from '../../images/menu.png'
import setting from '../../images/setting.png'

class DepositScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const { state: { params } } = navigation;

       return ({
            gesturesEnabled: false,
            headerLeft: <TouchableOpacity onPress={params ? params.onOpenSideMenu : () => {}}>
                            <Image style={styles.headerImage} source={menu} />
                        </TouchableOpacity>,
            headerTitle: <Text style={styles.headerTitle}>Invoice</Text>,           
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
                    <View style={styles.topView}>
                        <Text style={styles.wipay}>Create Invoice</Text>
                    </View>
                    <View style={{flex:5,backgroundColor:'white'}}>
                        <View style={{
                            flexDirection:'row',
                        }}>
                            <View style={styles.labelButton}>
                            </View>
                        </View>
                       <KeyboardAwareScrollView
                            contentContainerStyle={{flex:1}}
                             resetScrollToCoords={{ x: 0, y: 0 }}
                            scrollEnabled={true}  extraHeight={Dimensions.get('window').height/3} >
                            <View style={{flex:1,paddingTop:10,}}>
                                <View style={{paddingHorizontal:'10%'}}>
                                    <Text style={styles.forgot}>Recipient Amount:</Text>
                                    <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done" style={styles.username}></TextInput>
                                
                                    <Text style={styles.forgot}>Invoice Amount:</Text>
                                    <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done" style={styles.username}></TextInput>
                               
                                    <Text style={styles.forgot}>Invoice Number:</Text>
                                    <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done" style={styles.username}></TextInput>
                                
                                    <Text style={styles.forgot}>Note:</Text>
                                    <TextInput underlineColorAndroid='transparent' style={styles.username}></TextInput>
                                
                                    <RkButton style={styles.submitButton} onPress={() => this.props.navigation.navigate('WipayScreen')}>
                                        <Text style={styles.submitText}>Submit</Text>
                                    </RkButton>
                                </View>
                            </View>
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
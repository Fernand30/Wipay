import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Button,Dimensions,TouchableOpacity,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
import styles from './styles'
import { RkText, RkTheme, RkButton} from 'react-native-ui-kitten';
import home from '../../images/home.png'
import qrcode from '../../images/qrcodefooter.png'
import bitcoin from '../../images/bitcoin.png'
import barcode from '../../images/barcode.png'

class FooterScreen extends React.Component {
   
    constructor(){
        super();
        this.state = {
            isOpen:false,
        };        
    }

    render() {
            
        return (
            <View style={{
                        backgroundColor:'white',
                        width:'100%',
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                    }}>
                <TouchableOpacity style={{alignSelf:'center'}} onPress={ () => this.props.navigation.navigate('WipayScreen')}>
                    <View>
                        <View style={styles.eachView}></View>
                        <Image style={styles.footerStyle} source={home} />
                        <RkText style={styles.eachText}>HOME</RkText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity   onPress={ () => this.props.navigation.navigate('QrScreen')}>
                    <View style={{alignSelf:'center'}}>
                        <View style={styles.eachView}></View>
                        <Image style={styles.footerStyle} source={qrcode} />
                        <RkText style={styles.eachText}>MY QR</RkText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={ () => this.props.navigation.navigate('CoinScreen')}>
                    <View style={{alignSelf:'center'}}>
                        <View style={styles.eachView}></View>
                        <Image style={styles.footerStyle} source={bitcoin} />
                        <RkText style={styles.eachText}>COIN</RkText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={ () => {}}>
                <View style={{alignSelf:'center'}}>
                    <View style={styles.eachView}></View>
                    <Image style={styles.footerStyle} source={barcode} />
                    <RkText style={styles.eachText}>SCAN</RkText>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default FooterScreen;
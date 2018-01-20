import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import DepositScreen from './screen/DepositScreen';
import SideMenuScreen from './screen/SideMenuScreen'
import SettingScreen from './screen/SettingScreen'
import InvoiceScreen from './screen/InvoiceScreen'
import ProfileScreen from './screen/ProfileScreen'
import QrScreen from './screen/QrScreen'
import GetCashScreen from './screen/GetCashScreen'
import CoinScreen from './screen/CoinScreen'
import WipayScreen from './screen/WipayScreen'

const AppNavigator = StackNavigator({
	LoginScreen: { screen: LoginScreen },
	HomeScreen: {screen: HomeScreen},
	DepositScreen: {screen: DepositScreen},
    SideMenuScreen: {screen: SideMenuScreen},
    SettingScreen: {screen: SettingScreen},
    InvoiceScreen: {screen: InvoiceScreen},
    ProfileScreen: {screen: ProfileScreen},
    QrScreen: {screen: QrScreen},
    GetCashScreen: {screen: GetCashScreen},
    CoinScreen: {screen: CoinScreen},
    WipayScreen: {screen: WipayScreen},
});

const mapStateToProps = state => ({
    nav: state.nav
});

class AppWithNavigationState extends Component {
    render() {
        return (
            <AppNavigator
             />
        );
    }
}

export default AppWithNavigationState;
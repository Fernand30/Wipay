import { Platform } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const styles = {
    container: {
        flex: 8,
        backgroundColor:'transparent',
    },    
    footerStyle:{
        width: responsiveWidth(7),
        height: responsiveWidth(7),
        marginVertical:responsiveWidth(1),
        alignSelf:'center',
    },
    eachView:{
        height: responsiveWidth(0.1),
        width:responsiveWidth(20),
        backgroundColor: 'transparent',
        alignSelf:'center'
    },
    eachText:{
        fontSize:responsiveFontSize(1.5),
        alignSelf:'center',
        marginVertical:responsiveHeight(1),
        fontWeight:'300', 
        color:'black'
    },
}

export default styles
import { Platform } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = {
    container: {
        flex: 1,
        backgroundColor:'transparent',
    },
    wipay:{
    	color:'white',
    	fontSize:responsiveFontSize(8),
    	fontWeight:'600',
    	alignSelf:'center',
    },
    login:{
    	color:'white',
    	fontSize:responsiveFontSize(2.2),
    	fontWeight:'600',
    	alignSelf:'center'
    },
    username:{
    	width:'80%',
    	alignSelf:'center',
    	borderBottomWidth:2,
    	borderColor:'white',
    	fontSize:responsiveFontSize(3),
    	paddingBottom:8,
    	color:'white'
    },
    loginButton:{
    	width:'80%',
    	height:responsiveHeight(7),
    	backgroundColor:'rgb(0,126,219)',
    	alignSelf:'center',
    	borderRadius:responsiveHeight(2),
        marginTop: responsiveHeight(2)
    },
    forgot:{
    	color:'white',
    	fontSize:responsiveFontSize(2),
    	fontWeight:'600',
    	alignSelf:'center',
        marginTop: responsiveHeight(1)
    },
    loginButtonText:{
        color:'white',
        fontSize:responsiveFontSize(3),
        fontWeight:'600'
    },
    bottomView:{
        flex:1,
        paddingBottom:responsiveHeight(1),
    }
}

export default styles
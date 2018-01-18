import { Platform } from 'react-native';
import { Dimensions } from "react-native"

const styles = {
    container: {
        flex: 8,
        backgroundColor:'transparent',
    },
    wipay:{
    	color:'white',
    	fontSize:55,
    	fontWeight:'600',
    	alignSelf:'center',
        marginTop:20
    },
     totalText:{
        color:'white',
        fontSize:35,
        fontWeight:'600',
        alignSelf:'center',
        marginTop:10
    },
    shapeImage:{
        width:'10%',
        height:'8%',
        position:'absolute',
        bottom:0,
        right: Dimensions.get('window').width/2-Dimensions.get('window').width*0.05
    },
    login:{
    	color:'white',
    	fontSize:16,
    	fontWeight:'400',
    	alignSelf:'center'
    },
    username:{
    	width:'80%',
    	alignSelf:'center',
    	borderBottomWidth:2,
    	borderColor:'white',
    	fontSize:22,
    	paddingBottom:8,
    	color:'white'
    },
    loginButton:{
    	width:'48%',
    	height:35,
    	alignSelf:'center',
    	borderRadius:15
    },
    forgot:{
    	color:'white',
    	fontSize:18,
    	fontWeight:'400',
    	alignSelf:'center',
        marginTop: 20
    },
    line:{
        height:2,
        backgroundColor:'rgb(225,225,225)',
        width:'100%',
        marginVertical:10
    }
}

export default styles
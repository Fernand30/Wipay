import { Platform } from 'react-native';

const styles = {
    container: {
        flex: 8,
        backgroundColor:'transparent',
    },
    wipay:{
    	color:'white',
    	fontSize:45,
    	fontWeight:'300',
    	alignSelf:'center',
    },
    login:{
    	color:'white',
    	fontSize:16,
    	fontWeight:'400',
    	alignSelf:'center'
    },
    username:{
    	width:'100%',
    	alignSelf:'center',
    	borderBottomWidth:2,
    	borderColor:'#ddd',
    	fontSize:20,
    	paddingBottom:3,
    	color:'black'
    },
    loginButton:{
    	width:'40%',
    	height:40,
    	alignSelf:'center',
    	borderRadius:15,
        backgroundColor:'transparent',
        borderColor:'rgb(0,138,220)',
        borderWidth:1
    },
    forgot:{
    	color:'grey',
    	fontSize:14,
    	fontWeight:'400',
    	alignSelf:'flex-start'
    },
    line:{
        height:2,
        backgroundColor:'rgb(225,225,225)',
        width:'100%',
        marginBottom:10
    },
    labelButtonA:{
        backgroundColor:'rgb(82,151,250)',
        borderRadius:0,
        height: 30,
    },
    labelButton:{
        backgroundColor:'rgb(0,85,227)',
        borderRadius:0,
        flex:1,
        height: 40
    },
    heads:{
        color:'white',
        fontWeight:'600',
    },
    tails:{
       color:'white',
       fontWeight:'200',
    }
}

export default styles
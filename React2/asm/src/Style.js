import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'grey',
        marginTop: 10,
        borderWidth: 2
    },
    inputPassword: {
        fontSize: 13,
        flex: 1,
        paddingLeft: 15,
        fontWeight: '600',
    },
    eyeIcon: {
        paddingRight: 20,
        fontSize: 20,
        color: '#a8a8ab',
    },
    check: {
        paddingRight: 2,
        fontSize: 20,
        color: '#a8a8ab',
    },
    inputWrap: {
        width: '85%'
    },
    input: {
        width: '100%',
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 12,
        borderColor: 'grey',
        paddingLeft: 15,
        fontWeight: '600',
    },
    inputFocused: {
        borderColor: '#f54869',
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    imgWrap: {
        height: '30%',
        width: '100%',
        marginBottom: 30,
        // marginTop: 30,
        justifyContent: 'center',
        // backgroundColor: 'red'
        // elevation: 10
    },
    image: {
        width: '65%',
        height: '100%',
        alignSelf: 'center',
        borderRadius: 500,
        marginTop: 30
    },
    imageRegister:{
        width: 150,
        height: 150,
        borderRadius: 500,
        alignSelf: 'center',
    },
    imgRegisterWrap: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    body: {
        alignItems: 'center',
        height: '45%',
    },
    title1: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        
    },
    title2: {
        fontSize: 17,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10
    },
    passwordMethod: {
        width: '85%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    checkStyle: {
        flexDirection: 'row',
        marginTop: 2
    },
    checkText: {
        fontWeight: '500',
        color: '#a8a8ab',
        fontSize: 13
    },
    forgotText: {
        color: '#e28075',
        fontWeight: '500',
        fontSize: 13
    },
    bodyMethod: {
        width: '100%',
        height: '45%',
        alignItems: 'center',
        marginTop: 20,
    },
    slice: {
        flexDirection: 'row',
        marginTop: 15,
    },
    sliceSign: {
        color: '#e28075',
        fontWeight: '500'
    },
    sliceText: {
        fontSize: 13,
        fontWeight: '600',
        color: 'black',
        marginTop: 5,
        marginHorizontal: 6
    },
    termText: {
        fontWeight: '600',
        color: 'black',
    },
    loginMethod:{
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '25%',
    },
    loginIconWrap:{
        flexDirection: 'row',
    },
    registerWrap:{
        flexDirection: 'row',
        marginTop: 30
    },
    registerText:{
        fontSize: 13,
        fontWeight: '500',
        color: '#ed321d',
        marginTop: 5,
    },
    termWrap1:{
        marginBottom: 20,
        alignItems: 'center'
    },
    termWrap2:{
        flexDirection: 'row',
    },
    term:{
        color: '#f54869',
        fontWeight: '500',
        textDecorationLine : 'underline',
    },
});

export default styles;
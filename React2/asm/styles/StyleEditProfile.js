import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
    },
    img: {
        flex: 1.4,
        width: '90%',
        alignSelf: 'center',
    },
    container: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        alignSelf: 'center',
        padding: 20,
        elevation: 5, // Đổ bóng nhẹ cho container
        marginTop: '17%',
        flex: 1.6
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Màu sắc tối cho tiêu đề
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    btn: {
        borderRadius: 500,
        backgroundColor: 'black',
        alignSelf: 'center',
        width: 150,
        marginTop: 10
    },
    textBtn: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 5
    },
    backButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 500,
        marginLeft: 20,
        marginTop: 15,
        position: 'absolute',
        borderWidth: 2,

    },
    backButtonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default styles;
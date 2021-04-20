import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f7f9',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleInitial: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#333',
    },

    caption: {
        fontSize: 20,
        color: '#555',
        marginTop: 20,
    },

    boxPlayerInitial: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ddd',
        backgroundColor: '#F0F8FF',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },

    Items: {
        flexDirection: 'row',
    },

    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#333',
        margin: 15,
    },

    boxPlayer: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ddd',
        backgroundColor: '#e9e9e9',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },

    restartButton: {
        width: 260,
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ddd',
        backgroundColor: '#e7eaeb',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 25,
    },

    restart: {
        fontSize: 17,
        fontWeight: 'bold',
    },

    playerX: {
        fontSize: 40,
        color: '#553fda',
    },
    
    playerO: {
        fontSize: 40,
        color: '#da3f3f',
    },

});


export default styles;
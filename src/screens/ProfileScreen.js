import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Avatar, Button } from 'react-native-paper';

import ProfileOptions from '../../components/ProfileOptions';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';

const { name, role } = {
    name: 'Freddy Sanchez',
    role: 'freddy_sz12',
};

const options = [
    {
        id: 1,
        OptionName: 'Edit Profile',
        iconName: 'user',
        ScreenName : 'Edit Profile'
        
    },
    {
        id: 2,
        OptionName: 'Payments',
        iconName: 'credit-card',
        ScreenName : 'Payments'
    },
    {
        id: 3,
        OptionName: 'Notifications',
        iconName: 'bell',
        ScreenName : 'Edit Profile'
    },
    {
        id: 4,
        OptionName: 'Help center',
        iconName: 'comment-alt',
        ScreenName : 'Edit Profile'
    },
];

const ProfileScreen = ({navigation}) => {

    const logout= ()=>{
        navigation.popToTop();
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.AvatarContainer}>
                    <Avatar.Image
                        size={90}
                        source={{
                            uri: 'https://picsum.photos/700',
                        }}
                    />
                    <View style={styles.InfoContainer}>
                        <Text style={styles.InfoText}>{name}</Text>
                        <Text style={[styles.InfoText, { fontSize: 15 }]}>{role}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    {options.map(option => (
                    <TouchableOpacity  key={option.id} onPress={()=> navigation.navigate(option.ScreenName)}>
                        <ProfileOptions
                            key={option.id}
                            OptionName={option.OptionName}
                            OptionDescription={option.OptionDescription}
                            iconName={option.iconName}
                        />
                        </TouchableOpacity>
                    ))}
                </View>
                <Button
                    uppercase={false}
                    contentStyle={{ height: 50, width: 150 }}
                    style={styles.logoutButton}
                    labelStyle={{ fontSize: 16, color: 'black' }}
                    mode='contained-tonal'
                    icon="logout"
                    onPress={logout}>
                    Logout
                </Button>

            </ScrollView>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    AvatarContainer: {
        borderTopColor: 'black',
        marginTop: 15,
        flexDirection: 'row',
        paddingLeft: 25,
    },
    InfoContainer: {
        marginTop: 18,
        marginLeft: 10,
        alignContent: 'center',
        flex: 1,
    },
    InfoText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500'
    },
    logoutButton: {
        marginTop: 20,
        marginBottom: 20,
    },

});
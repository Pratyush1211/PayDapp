import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';

  import PrimaryButton from '../../components/PrimaryButton';
  
  
  export default function EditProfileScreen({navigation}) {
  
    const [username, setusername] = React.useState('');
    const [email, setemail] = React.useState('');
    const [phonenumber, setphoneumber] = React.useState('');
  
    return (
      <View style={styles.container}>
        <View style={styles.wideInputContainer}>
          <Text style={styles.inputDetailText}>User name</Text>
          <TextInput
            style={[styles.input, {width: 350}]}
            onChangeText={setusername}
            value={username}
          />
        </View>
  
        <View style={styles.wideInputContainer}>
          <Text style={styles.inputDetailText}>Email Address</Text>
          <TextInput
            style={[styles.input, {width: 350}]}
            onChangeText={setemail}
            value={email}
          />
        </View>
        <View style={styles.wideInputContainer}>
          <Text style={styles.inputDetailText}>Phone Number</Text>
          <TextInput
            style={[styles.input, {width: 350}]}
            onChangeText={setphoneumber}
            value={phonenumber}
          />
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('Change Password')}>
        <Text style={styles.textdetails}>Change Password</Text>
        </TouchableOpacity>

<View style={styles.bottom}>
        <PrimaryButton title={'Save'}/>
        </View>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems : 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    inputDetailText: {
      fontWeight: '400',
      color: 'black',
      fontSize: 14,
    },
    input: {
      marginTop: 5,
      height: 60,
      width: 170,
      borderWidth: 0.5,
      padding: 10,
      borderRadius: 5,
    },
    wideInputContainer: {
      paddingTop: 35,
    },
    textdetails: {
        color: '#58A5FF',
        fontWeight: '500',
        fontSize: 15,
        margin: 20,
    },
    bottom: {
        flex: 0.8,
        justifyContent: 'flex-end',
        marginBottom: 36
      }
  });
  
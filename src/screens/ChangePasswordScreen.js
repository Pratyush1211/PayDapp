import {
    StyleSheet,
    Text,
    View,
    TextInput,
  } from 'react-native';
  import React from 'react';

  import PrimaryButton from '../../components/PrimaryButton';
  
  
  export default function ChangePasswordScreen({navigation}) {
  
    const [currentpassword, setcurrentpassword] = React.useState('');
    const [newpassword, setnewpassword] = React.useState('');
    const [confirmpassword, setconfirmpassword] = React.useState('');
  
    return (
      <View style={styles.container}>
        <View style={styles.wideInputContainer}>
          <Text style={styles.inputDetailText}>Current Password</Text>
          <TextInput
            style={[styles.input, {width: 350}]}
            onChangeText={setcurrentpassword}
            value={currentpassword}
          />
        </View>
  
        <View style={styles.wideInputContainer}>
          <Text style={styles.inputDetailText}>New Password</Text>
          <TextInput
            style={[styles.input, {width: 350}]}
            onChangeText={setnewpassword}
            value={newpassword}
          />
        </View>
        <View style={styles.wideInputContainer}>
          <Text style={styles.inputDetailText}>Confirm New Password</Text>
          <TextInput
            style={[styles.input, {width: 350}]}
            onChangeText={setconfirmpassword}
            value={confirmpassword}
          />
        </View>
        <Text style={{fontSize: 12, textAlign: 'left', margin: 12}}>
          Password must be a minimum of 8 characters, with one uppercase letter,
          one number, and one special character.
      </Text>
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
    bottom: {
        flex: 0.8,
        justifyContent: 'flex-end',
        marginBottom: 36
      }
  });
  
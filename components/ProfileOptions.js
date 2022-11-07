import {StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileOptions = ({
  OptionName,
  OptionDescription,
  navigation,
  iconName,
}) => {
  return (
    <View style={styles.ProfileOptionsContainer}>
      <View style={styles.IconOption}>
        <FontAwesome5Icon name={iconName} size={25} color="black" />
      </View>
      <View style={styles.ProfileOption}>
        <Text style={styles.ProfileOptionText}>{OptionName}</Text>
        <Text
          style={[
            styles.ProfileOptionText,
            {fontWeight: '300', fontSize: 12, marginTop: 2, color: '#171717'},
          ]}>
          {OptionDescription}
        </Text>
      </View>
      <FontAwesome5Icon
        name="angle-right"
        size={20}
        color="black"
        style={{marginBottom: 8, marginRight: 15}}
      />
    </View>
  );
};

export default ProfileOptions;

const styles = StyleSheet.create({

  ProfileOptionsContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#E5E5E5',
  },
  IconOption: {
    marginLeft: 25,
    flex: 0.11

  },
  ProfileOption: {
    marginLeft: 10,
    flexDirection: 'column',
    flex: 1,
  },
  ProfileOptionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
});

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export type Props = {
  navigation: any;
};

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Click me to go to profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;

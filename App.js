import React, {useEffect, useState} from 'react';

import {ActivityIndicator, Button, View, SafeAreaView} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import {changeTheme, initThemes} from './src/themes';

import styles from './styles';

//Init default theme
initThemes();

export default function App() {
  const [loading, setLoading] = useState(true);

  //Stop loading from init
  useEffect(() => {
    EStyleSheet.subscribe('build', () => {
      setLoading(false);
    });
  }, []);

  const onRefreshApp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  //onChangeTheme
  const onChangeTheme = () => {
    const currentTheme = EStyleSheet.value('$theme');
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    changeTheme(nextTheme);

    //Need refresh all yours screens
    onRefreshApp();
  };

  return !loading ? (
    <SafeAreaView style={[styles.containerStyle]}>
      <Button title="Change Theme" onPress={onChangeTheme} />
    </SafeAreaView>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}

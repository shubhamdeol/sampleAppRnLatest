import React from 'react';
import {SafeAreaView, useColorScheme, StyleSheet} from 'react-native';

import {AppUIProvider} from 'bad-ui';
import {NavigationRoot} from './src/navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <AppUIProvider
      theme={{
        dark: isDarkMode,
      }}>
      <SafeAreaView style={styles.safeAreaView}>
        <NavigationRoot />
      </SafeAreaView>
    </AppUIProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

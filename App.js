import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import messaging from '@react-native-firebase/messaging';
const App = () => {
  React.useEffect(() => {
    (async function requestUserPermission() {
      const authStatus = await messaging().requestPermission(); //send req to user to allow notification
      const enabled = //check requestPermission
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        messaging()
          .getToken()
          .then(val => console.log(val));
      }
    })();
    
  }, []);
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

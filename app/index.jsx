import { View, Text } from 'react-native'
import React from 'react'
import ColorList from '../components/ColorList'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

const index = () => {
  return (
    <View>
     <ColorList color="#0891b2"/>
    </View>
  )
}

export default index

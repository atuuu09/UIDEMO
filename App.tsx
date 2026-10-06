import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GestureDemo from './src/dragBox';
import InputDemo from './src/sliderInput';
import AnimationDemo from './src/animationFadein';
import { CustomButton } from './src/customButton';
import ExpandCollapseSimple from './src/transationBox';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        {/* <GestureDemo /> */}
        {/* <InputDemo /> */}
        {/* <AnimationDemo /> */}
        {/* <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <CustomButton label="Tekan Saya" />
        </View> */}
        {/* <ExpandCollapseSimple /> */}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
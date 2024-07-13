import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function HomeScreen() {
  return (
    <ThemedText type="title"  style={styles.titleColor}>Hello 😁</ThemedText>
    
  );
}

const styles = StyleSheet.create({
  titleColor:{
   textAlign:'center', 
    color:'black',
    marginTop:40
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

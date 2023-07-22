import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';


const RoundedImageBackground = ({ source, borderRadius, style, children }: any) => {
  return (
    <View style={[styles.imageContainer, { borderRadius }, style]}>
      <ImageBackground source={source} style={styles.imageBackground}>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default RoundedImageBackground;

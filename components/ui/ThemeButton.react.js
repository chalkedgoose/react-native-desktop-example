/* eslint-disable react-native/no-inline-styles */
/**
 *
 * @format
 * @flow strict-local
 */
import type {
  ViewStyleProp,
  TextStyleProp,
} from 'react-native-macos/Libraries/StyleSheet/StyleSheet';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native-macos';

type ThemeButtonColors = 'rgb(138,43,226)';

type Props = $ReadOnly<{
  color: ThemeButtonColors,
  onPress: () => void,
  title: string,
  style?: ViewStyleProp,
  labelStyle?: TextStyleProp,
}>;

function ThemeButton(props: Props): React$Element<typeof TouchableOpacity> {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={StyleSheet.compose(
          {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 30,
            width: 90,
            borderRadius: 5,
            backgroundColor: props.color,
          },
          props.style,
        )}>
        <Text
          style={StyleSheet.compose(
            {
              fontSize: 20,
              fontWeight: '300',
              color: 'white',
            },
            props.labelStyle,
          )}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ThemeButton;
